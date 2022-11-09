import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteUserRequest
/** 
 * Represents the request to delete a user.
**/
export class DeleteUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;
}
