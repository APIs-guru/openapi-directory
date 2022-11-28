import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemoteAccessSession } from "./remoteaccesssession";



// ListRemoteAccessSessionsResult
/** 
 * Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.
**/
export class ListRemoteAccessSessionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteAccessSessions", elemType: RemoteAccessSession })
  remoteAccessSessions?: RemoteAccessSession[];
}
