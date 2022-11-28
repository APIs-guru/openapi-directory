import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";



// GetProjectResult
/** 
 * Represents the result of a get project request.
**/
export class GetProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Project;
}
