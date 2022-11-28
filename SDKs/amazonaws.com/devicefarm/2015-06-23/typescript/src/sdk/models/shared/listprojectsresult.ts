import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";



// ListProjectsResult
/** 
 * Represents the result of a list projects request.
**/
export class ListProjectsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: Project })
  projects?: Project[];
}
