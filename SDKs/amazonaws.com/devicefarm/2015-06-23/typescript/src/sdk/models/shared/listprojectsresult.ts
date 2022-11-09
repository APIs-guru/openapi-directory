import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Project } from "./project";


// ListProjectsResult
/** 
 * Represents the result of a list projects request.
**/
export class ListProjectsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=projects", elemType: shared.Project })
  projects?: Project[];
}
