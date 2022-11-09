import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Project } from "./project";


// CreateProjectResult
/** 
 * Represents the result of a create project request.
**/
export class CreateProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=project" })
  project?: Project;
}
