import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RemoteAccessSession } from "./remoteaccesssession";


// StopRemoteAccessSessionResult
/** 
 * Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.
**/
export class StopRemoteAccessSessionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=remoteAccessSession" })
  remoteAccessSession?: RemoteAccessSession;
}
