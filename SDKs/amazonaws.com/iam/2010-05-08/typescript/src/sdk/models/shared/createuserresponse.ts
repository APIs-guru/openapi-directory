import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// CreateUserResponse
/** 
 * Contains the response to a successful <a>CreateUser</a> request. 
**/
export class CreateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  user?: User;
}
