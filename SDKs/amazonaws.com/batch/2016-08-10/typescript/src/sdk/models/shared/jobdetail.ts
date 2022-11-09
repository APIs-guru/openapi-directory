import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=arrayProperties" })
  arrayProperties?: ArrayPropertiesDetail;

  @Metadata({ data: "json, name=attempts", elemType: shared.AttemptDetail })
  attempts?: AttemptDetail[];

  @Metadata({ data: "json, name=container" })
  container?: ContainerDetail;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: number;

  @Metadata({ data: "json, name=dependsOn", elemType: shared.JobDependency })
  dependsOn?: JobDependency[];

  @Metadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=jobDefinition" })
  jobDefinition: string;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=jobName" })
  jobName: string;

  @Metadata({ data: "json, name=jobQueue" })
  jobQueue: string;

  @Metadata({ data: "json, name=nodeDetails" })
  nodeDetails?: NodeDetails;

  @Metadata({ data: "json, name=nodeProperties" })
  nodeProperties?: NodeProperties;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=platformCapabilities" })
  platformCapabilities?: PlatformCapabilityEnum[];

  @Metadata({ data: "json, name=propagateTags" })
  propagateTags?: boolean;

  @Metadata({ data: "json, name=retryStrategy" })
  retryStrategy?: RetryStrategy;

  @Metadata({ data: "json, name=startedAt" })
  startedAt: number;

  @Metadata({ data: "json, name=status" })
  status: JobStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=stoppedAt" })
  stoppedAt?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=timeout" })
  timeout?: JobTimeout;
}
