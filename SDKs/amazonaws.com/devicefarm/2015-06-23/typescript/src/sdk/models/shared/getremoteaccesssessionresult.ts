import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RemoteAccessSession } from "./remoteaccesssession";


// GetRemoteAccessSessionResult
/** 
 * Represents the response from the server that lists detailed information about the remote access session.
**/
export class GetRemoteAccessSessionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=remoteAccessSession" })
  remoteAccessSession?: RemoteAccessSession;
}
