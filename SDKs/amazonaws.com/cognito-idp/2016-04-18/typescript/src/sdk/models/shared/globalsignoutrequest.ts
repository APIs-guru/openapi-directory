import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlobalSignOutRequest
/** 
 * Represents the request to sign out all devices.
**/
export class GlobalSignOutRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;
}
