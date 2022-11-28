import { SpeakeasyBase } from "../../../internal/utils";
import { RemoteAccessSession } from "./remoteaccesssession";
/**
 * Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.
**/
export declare class StopRemoteAccessSessionResult extends SpeakeasyBase {
    remoteAccessSession?: RemoteAccessSession;
}
