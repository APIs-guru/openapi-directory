import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteUserRequest
/** 
 * Represents the request to delete a user.
**/
export class DeleteUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;
}
