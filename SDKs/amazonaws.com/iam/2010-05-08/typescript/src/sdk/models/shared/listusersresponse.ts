import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// ListUsersResponse
/** 
 * Contains the response to a successful <a>ListUsers</a> request. 
**/
export class ListUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: User })
  users: User[];
}
