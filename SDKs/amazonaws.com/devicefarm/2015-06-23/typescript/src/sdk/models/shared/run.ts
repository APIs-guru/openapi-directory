import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=appUpload" })
  appUpload?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=billingMethod" })
  billingMethod?: BillingMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=completedJobs" })
  completedJobs?: number;

  @SpeakeasyMetadata({ data: "json, name=counters" })
  counters?: Counters;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=customerArtifactPaths" })
  customerArtifactPaths?: CustomerArtifactPaths;

  @SpeakeasyMetadata({ data: "json, name=deviceMinutes" })
  deviceMinutes?: DeviceMinutes;

  @SpeakeasyMetadata({ data: "json, name=devicePoolArn" })
  devicePoolArn?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceSelectionResult" })
  deviceSelectionResult?: DeviceSelectionResult;

  @SpeakeasyMetadata({ data: "json, name=eventCount" })
  eventCount?: number;

  @SpeakeasyMetadata({ data: "json, name=jobTimeoutMinutes" })
  jobTimeoutMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkProfile" })
  networkProfile?: NetworkProfile;

  @SpeakeasyMetadata({ data: "json, name=parsingResultUrl" })
  parsingResultUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: DevicePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=radios" })
  radios?: Radios;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ExecutionResultEnum;

  @SpeakeasyMetadata({ data: "json, name=resultCode" })
  resultCode?: ExecutionResultCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=seed" })
  seed?: number;

  @SpeakeasyMetadata({ data: "json, name=skipAppResign" })
  skipAppResign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=started" })
  started?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopped" })
  stopped?: Date;

  @SpeakeasyMetadata({ data: "json, name=testSpecArn" })
  testSpecArn?: string;

  @SpeakeasyMetadata({ data: "json, name=totalJobs" })
  totalJobs?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=webUrl" })
  webUrl?: string;
}
