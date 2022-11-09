import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetUserRequest
/** 
 * Represents the request to get information about the user.
**/
export class GetUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;
}
