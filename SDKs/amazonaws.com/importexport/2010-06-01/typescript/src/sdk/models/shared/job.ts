import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";



// Job
/** 
 * Representation of a job returned by the ListJobs operation.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata()
  isCanceled?: boolean;

  @SpeakeasyMetadata()
  jobId?: string;

  @SpeakeasyMetadata()
  jobType?: JobTypeEnum;
}
