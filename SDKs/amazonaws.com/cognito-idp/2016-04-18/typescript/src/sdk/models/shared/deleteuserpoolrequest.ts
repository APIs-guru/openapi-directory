import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteUserPoolRequest
/** 
 * Represents the request to delete a user pool.
**/
export class DeleteUserPoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
