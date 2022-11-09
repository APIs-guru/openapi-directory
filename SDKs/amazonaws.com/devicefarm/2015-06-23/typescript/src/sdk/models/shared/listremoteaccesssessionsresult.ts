import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemoteAccessSession } from "./remoteaccesssession";


// ListRemoteAccessSessionsResult
/** 
 * Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.
**/
export class ListRemoteAccessSessionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=remoteAccessSessions", elemType: shared.RemoteAccessSession })
  remoteAccessSessions?: RemoteAccessSession[];
}
