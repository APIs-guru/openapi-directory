import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArrayPropertiesSummary } from "./arraypropertiessummary";
import { ContainerSummary } from "./containersummary";
import { NodePropertiesSummary } from "./nodepropertiessummary";
import { JobStatusEnum } from "./jobstatusenum";



// JobSummary
/** 
 * An object representing summary details of a job.
**/
export class JobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayProperties" })
  arrayProperties?: ArrayPropertiesSummary;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: ContainerSummary;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobDefinition" })
  jobDefinition?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=nodeProperties" })
  nodeProperties?: NodePropertiesSummary;

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=stoppedAt" })
  stoppedAt?: number;
}
