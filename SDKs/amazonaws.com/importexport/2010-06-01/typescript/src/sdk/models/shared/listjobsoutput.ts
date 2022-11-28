import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// ListJobsOutput
/** 
 * Output structure for the ListJobs operation.
**/
export class ListJobsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata({ elemType: Job })
  jobs?: Job[];
}
