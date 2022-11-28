import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";



// ListRolesResponse
/** 
 * Contains the response to a successful <a>ListRoles</a> request. 
**/
export class ListRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Role })
  roles: Role[];
}
