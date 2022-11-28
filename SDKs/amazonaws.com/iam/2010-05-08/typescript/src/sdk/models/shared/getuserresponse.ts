import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// GetUserResponse
/** 
 * Contains the response to a successful <a>GetUser</a> request. 
**/
export class GetUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  user: User;
}
