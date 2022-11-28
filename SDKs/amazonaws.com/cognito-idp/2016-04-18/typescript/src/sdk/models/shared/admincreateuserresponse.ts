import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserType } from "./usertype";



// AdminCreateUserResponse
/** 
 * Represents the response from the server to the request to create the user.
**/
export class AdminCreateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: UserType;
}
