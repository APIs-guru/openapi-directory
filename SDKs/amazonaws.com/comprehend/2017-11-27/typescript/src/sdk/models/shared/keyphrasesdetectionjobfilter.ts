import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobStatusEnum } from "./jobstatusenum";


// KeyPhrasesDetectionJobFilter
/** 
 * Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
**/
export class KeyPhrasesDetectionJobFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=SubmitTimeAfter" })
  submitTimeAfter?: Date;

  @Metadata({ data: "json, name=SubmitTimeBefore" })
  submitTimeBefore?: Date;
}
