import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArrayPropertiesDetail } from "./arraypropertiesdetail";
import { AttemptDetail } from "./attemptdetail";
import { ContainerDetail } from "./containerdetail";
import { JobDependency } from "./jobdependency";
import { NodeDetails } from "./nodedetails";
import { NodeProperties } from "./nodeproperties";
import { PlatformCapabilityEnum } from "./platformcapabilityenum";
import { RetryStrategy } from "./retrystrategy";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTimeout } from "./jobtimeout";



// JobDetail
/** 
 * An object representing an Batch job.
**/
export class JobDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayProperties" })
  arrayProperties?: ArrayPropertiesDetail;

  @SpeakeasyMetadata({ data: "json, name=attempts", elemType: AttemptDetail })
  attempts?: AttemptDetail[];

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: ContainerDetail;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=dependsOn", elemType: JobDependency })
  dependsOn?: JobDependency[];

  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobDefinition" })
  jobDefinition: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=jobQueue" })
  jobQueue: string;

  @SpeakeasyMetadata({ data: "json, name=nodeDetails" })
  nodeDetails?: NodeDetails;

  @SpeakeasyMetadata({ data: "json, name=nodeProperties" })
  nodeProperties?: NodeProperties;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=platformCapabilities" })
  platformCapabilities?: PlatformCapabilityEnum[];

  @SpeakeasyMetadata({ data: "json, name=propagateTags" })
  propagateTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=retryStrategy" })
  retryStrategy?: RetryStrategy;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=stoppedAt" })
  stoppedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: JobTimeout;
}
