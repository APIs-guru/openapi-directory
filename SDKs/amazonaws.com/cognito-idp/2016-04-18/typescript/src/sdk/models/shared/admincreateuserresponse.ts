import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserType } from "./usertype";


// AdminCreateUserResponse
/** 
 * Represents the response from the server to the request to create the user.
**/
export class AdminCreateUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=User" })
  user?: UserType;
}
