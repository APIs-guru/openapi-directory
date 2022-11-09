import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArrayPropertiesSummary } from "./arraypropertiessummary";
import { ContainerSummary } from "./containersummary";
import { NodePropertiesSummary } from "./nodepropertiessummary";
import { JobStatusEnum } from "./jobstatusenum";


// JobSummary
/** 
 * An object representing summary details of a job.
**/
export class JobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayProperties" })
  arrayProperties?: ArrayPropertiesSummary;

  @Metadata({ data: "json, name=container" })
  container?: ContainerSummary;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: number;

  @Metadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=jobDefinition" })
  jobDefinition?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId: string;

  @Metadata({ data: "json, name=jobName" })
  jobName: string;

  @Metadata({ data: "json, name=nodeProperties" })
  nodeProperties?: NodePropertiesSummary;

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: number;

  @Metadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @Metadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=stoppedAt" })
  stoppedAt?: number;
}
