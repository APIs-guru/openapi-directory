import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetUserRequest
/** 
 * Represents the request to get information about the user.
**/
export class GetUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;
}
