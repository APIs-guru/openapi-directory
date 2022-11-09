import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteUserPoolRequest
/** 
 * Represents the request to delete a user pool.
**/
export class DeleteUserPoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
