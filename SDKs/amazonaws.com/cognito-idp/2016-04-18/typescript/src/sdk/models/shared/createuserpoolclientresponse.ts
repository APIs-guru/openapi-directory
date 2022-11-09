import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserPoolClientType } from "./userpoolclienttype";


// CreateUserPoolClientResponse
/** 
 * Represents the response from the server to create a user pool client.
**/
export class CreateUserPoolClientResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolClient" })
  userPoolClient?: UserPoolClientType;
}
