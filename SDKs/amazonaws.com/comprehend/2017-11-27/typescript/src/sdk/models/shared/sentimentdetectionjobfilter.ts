import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



// SentimentDetectionJobFilter
/** 
 * Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
**/
export class SentimentDetectionJobFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubmitTimeAfter" })
  submitTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=SubmitTimeBefore" })
  submitTimeBefore?: Date;
}
