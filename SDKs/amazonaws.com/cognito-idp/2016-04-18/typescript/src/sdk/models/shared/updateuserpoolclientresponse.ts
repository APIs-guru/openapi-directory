import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPoolClientType } from "./userpoolclienttype";



// UpdateUserPoolClientResponse
/** 
 * Represents the response from the server to the request to update the user pool client.
**/
export class UpdateUserPoolClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolClient" })
  userPoolClient?: UserPoolClientType;
}
