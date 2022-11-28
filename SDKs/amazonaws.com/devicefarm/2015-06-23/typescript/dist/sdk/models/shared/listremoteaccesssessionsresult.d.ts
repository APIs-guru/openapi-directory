import { SpeakeasyBase } from "../../../internal/utils";
import { RemoteAccessSession } from "./remoteaccesssession";
/**
 * Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.
**/
export declare class ListRemoteAccessSessionsResult extends SpeakeasyBase {
    nextToken?: string;
    remoteAccessSessions?: RemoteAccessSession[];
}
