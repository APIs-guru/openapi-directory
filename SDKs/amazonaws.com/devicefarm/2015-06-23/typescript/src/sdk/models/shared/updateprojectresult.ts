import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Project } from "./project";


// UpdateProjectResult
/** 
 * Represents the result of an update project request.
**/
export class UpdateProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=project" })
  project?: Project;
}
