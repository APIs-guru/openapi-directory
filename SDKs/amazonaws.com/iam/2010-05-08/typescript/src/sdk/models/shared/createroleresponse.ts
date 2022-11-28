import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";



// CreateRoleResponse
/** 
 * Contains the response to a successful <a>CreateRole</a> request. 
**/
export class CreateRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  role: Role;
}
