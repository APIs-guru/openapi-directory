import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalSignOutRequest
/** 
 * Represents the request to sign out all devices.
**/
export class GlobalSignOutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;
}
