import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingMethodEnum } from "./billingmethodenum";
import { Counters } from "./counters";
import { CustomerArtifactPaths } from "./customerartifactpaths";
import { DeviceMinutes } from "./deviceminutes";
import { DeviceSelectionResult } from "./deviceselectionresult";
import { Location } from "./location";
import { NetworkProfile } from "./networkprofile";
import { DevicePlatformEnum } from "./deviceplatformenum";
import { Radios } from "./radios";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionResultCodeEnum } from "./executionresultcodeenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { TestTypeEnum } from "./testtypeenum";


// Run
/** 
 * Represents a test run on a set of devices with a given app package, test parameters, and so on.
**/
export class Run extends SpeakeasyBase {
  @Metadata({ data: "json, name=appUpload" })
  appUpload?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=billingMethod" })
  billingMethod?: BillingMethodEnum;

  @Metadata({ data: "json, name=completedJobs" })
  completedJobs?: number;

  @Metadata({ data: "json, name=counters" })
  counters?: Counters;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=customerArtifactPaths" })
  customerArtifactPaths?: CustomerArtifactPaths;

  @Metadata({ data: "json, name=deviceMinutes" })
  deviceMinutes?: DeviceMinutes;

  @Metadata({ data: "json, name=devicePoolArn" })
  devicePoolArn?: string;

  @Metadata({ data: "json, name=deviceSelectionResult" })
  deviceSelectionResult?: DeviceSelectionResult;

  @Metadata({ data: "json, name=eventCount" })
  eventCount?: number;

  @Metadata({ data: "json, name=jobTimeoutMinutes" })
  jobTimeoutMinutes?: number;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkProfile" })
  networkProfile?: NetworkProfile;

  @Metadata({ data: "json, name=parsingResultUrl" })
  parsingResultUrl?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: DevicePlatformEnum;

  @Metadata({ data: "json, name=radios" })
  radios?: Radios;

  @Metadata({ data: "json, name=result" })
  result?: ExecutionResultEnum;

  @Metadata({ data: "json, name=resultCode" })
  resultCode?: ExecutionResultCodeEnum;

  @Metadata({ data: "json, name=seed" })
  seed?: number;

  @Metadata({ data: "json, name=skipAppResign" })
  skipAppResign?: boolean;

  @Metadata({ data: "json, name=started" })
  started?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ExecutionStatusEnum;

  @Metadata({ data: "json, name=stopped" })
  stopped?: Date;

  @Metadata({ data: "json, name=testSpecArn" })
  testSpecArn?: string;

  @Metadata({ data: "json, name=totalJobs" })
  totalJobs?: number;

  @Metadata({ data: "json, name=type" })
  type?: TestTypeEnum;

  @Metadata({ data: "json, name=webUrl" })
  webUrl?: string;
}
