import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteUserPoolClientRequest
/** 
 * Represents the request to delete a user pool client.
**/
export class DeleteUserPoolClientRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
