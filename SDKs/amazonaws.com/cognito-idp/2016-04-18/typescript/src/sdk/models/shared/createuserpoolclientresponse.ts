import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPoolClientType } from "./userpoolclienttype";



// CreateUserPoolClientResponse
/** 
 * Represents the response from the server to create a user pool client.
**/
export class CreateUserPoolClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolClient" })
  userPoolClient?: UserPoolClientType;
}
