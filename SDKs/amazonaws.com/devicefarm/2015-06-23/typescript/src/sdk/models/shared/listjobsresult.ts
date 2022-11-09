import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";


// ListJobsResult
/** 
 * Represents the result of a list jobs request.
**/
export class ListJobsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.Job })
  jobs?: Job[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
