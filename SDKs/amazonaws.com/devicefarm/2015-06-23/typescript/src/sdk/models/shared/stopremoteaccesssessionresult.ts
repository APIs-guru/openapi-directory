import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemoteAccessSession } from "./remoteaccesssession";



// StopRemoteAccessSessionResult
/** 
 * Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.
**/
export class StopRemoteAccessSessionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=remoteAccessSession" })
  remoteAccessSession?: RemoteAccessSession;
}
