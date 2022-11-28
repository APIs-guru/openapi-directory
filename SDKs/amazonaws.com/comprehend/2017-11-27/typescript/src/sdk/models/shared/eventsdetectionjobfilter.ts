import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



// EventsDetectionJobFilter
/** 
 * Provides information for filtering a list of event detection jobs.
**/
export class EventsDetectionJobFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubmitTimeAfter" })
  submitTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=SubmitTimeBefore" })
  submitTimeBefore?: Date;
}
