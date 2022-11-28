import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";



// UpdateProjectResult
/** 
 * Represents the result of an update project request.
**/
export class UpdateProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Project;
}
