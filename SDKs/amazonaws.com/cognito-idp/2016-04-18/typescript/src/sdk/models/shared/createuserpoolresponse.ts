import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPoolType } from "./userpooltype";



// CreateUserPoolResponse
/** 
 * Represents the response from the server for the request to create a user pool.
**/
export class CreateUserPoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPool" })
  userPool?: UserPoolType;
}
