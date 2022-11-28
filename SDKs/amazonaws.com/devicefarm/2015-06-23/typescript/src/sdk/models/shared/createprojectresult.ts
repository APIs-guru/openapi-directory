import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";



// CreateProjectResult
/** 
 * Represents the result of a create project request.
**/
export class CreateProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Project;
}
