import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AbortConfig } from "./abortconfig";
import { JobExecutionsRolloutConfig } from "./jobexecutionsrolloutconfig";
import { JobProcessDetails } from "./jobprocessdetails";
import { PresignedUrlConfig } from "./presignedurlconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { TargetSelectionEnum } from "./targetselectionenum";
import { TimeoutConfig } from "./timeoutconfig";


// Job
/** 
 * The <code>Job</code> object contains details about a job.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortConfig" })
  abortConfig?: AbortConfig;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=completedAt" })
  completedAt?: Date;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=forceCanceled" })
  forceCanceled?: boolean;

  @Metadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=jobProcessDetails" })
  jobProcessDetails?: JobProcessDetails;

  @Metadata({ data: "json, name=jobTemplateArn" })
  jobTemplateArn?: string;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=namespaceId" })
  namespaceId?: string;

  @Metadata({ data: "json, name=presignedUrlConfig" })
  presignedUrlConfig?: PresignedUrlConfig;

  @Metadata({ data: "json, name=reasonCode" })
  reasonCode?: string;

  @Metadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @Metadata({ data: "json, name=targetSelection" })
  targetSelection?: TargetSelectionEnum;

  @Metadata({ data: "json, name=targets" })
  targets?: string[];

  @Metadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: TimeoutConfig;
}
