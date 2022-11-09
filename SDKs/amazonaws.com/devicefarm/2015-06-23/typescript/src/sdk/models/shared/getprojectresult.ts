import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Project } from "./project";


// GetProjectResult
/** 
 * Represents the result of a get project request.
**/
export class GetProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=project" })
  project?: Project;
}
