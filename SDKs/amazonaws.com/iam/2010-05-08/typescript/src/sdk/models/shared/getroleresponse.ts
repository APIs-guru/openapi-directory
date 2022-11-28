import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";



// GetRoleResponse
/** 
 * Contains the response to a successful <a>GetRole</a> request. 
**/
export class GetRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  role: Role;
}
