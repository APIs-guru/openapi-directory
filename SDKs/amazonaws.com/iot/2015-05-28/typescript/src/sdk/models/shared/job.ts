import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=abortConfig" })
  abortConfig?: AbortConfig;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=completedAt" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=forceCanceled" })
  forceCanceled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=jobProcessDetails" })
  jobProcessDetails?: JobProcessDetails;

  @SpeakeasyMetadata({ data: "json, name=jobTemplateArn" })
  jobTemplateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=namespaceId" })
  namespaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=presignedUrlConfig" })
  presignedUrlConfig?: PresignedUrlConfig;

  @SpeakeasyMetadata({ data: "json, name=reasonCode" })
  reasonCode?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetSelection" })
  targetSelection?: TargetSelectionEnum;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: string[];

  @SpeakeasyMetadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: TimeoutConfig;
}
