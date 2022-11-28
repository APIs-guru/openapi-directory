import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// ListJobsResult
/** 
 * Represents the result of a list jobs request.
**/
export class ListJobsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: Job })
  jobs?: Job[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
