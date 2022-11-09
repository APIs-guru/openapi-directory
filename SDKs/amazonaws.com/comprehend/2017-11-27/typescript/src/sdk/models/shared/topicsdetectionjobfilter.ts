import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


// TopicsDetectionJobFilter
/** 
 * Provides information for filtering topic detection jobs. For more information, see .
**/
export class TopicsDetectionJobFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=SubmitTimeAfter" })
  submitTimeAfter?: Date;

  @Metadata({ data: "json, name=SubmitTimeBefore" })
  submitTimeBefore?: Date;
}
