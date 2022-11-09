import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserPoolType } from "./userpooltype";


// CreateUserPoolResponse
/** 
 * Represents the response from the server for the request to create a user pool.
**/
export class CreateUserPoolResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPool" })
  userPool?: UserPoolType;
}
