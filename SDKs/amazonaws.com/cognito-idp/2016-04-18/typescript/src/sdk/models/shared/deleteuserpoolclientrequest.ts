import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteUserPoolClientRequest
/** 
 * Represents the request to delete a user pool client.
**/
export class DeleteUserPoolClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
