import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemoteAccessSession } from "./remoteaccesssession";



// CreateRemoteAccessSessionResult
/** 
 * Represents the server response from a request to create a remote access session.
**/
export class CreateRemoteAccessSessionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=remoteAccessSession" })
  remoteAccessSession?: RemoteAccessSession;
}
