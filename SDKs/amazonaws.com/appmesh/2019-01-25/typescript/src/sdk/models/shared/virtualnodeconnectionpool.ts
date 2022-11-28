import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeGrpcConnectionPool } from "./virtualnodegrpcconnectionpool";
import { VirtualNodeHttpConnectionPool } from "./virtualnodehttpconnectionpool";
import { VirtualNodeHttp2ConnectionPool } from "./virtualnodehttp2connectionpool";
import { VirtualNodeTcpConnectionPool } from "./virtualnodetcpconnectionpool";



// VirtualNodeConnectionPool
/** 
 * <p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/>
**/
export class VirtualNodeConnectionPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grpc" })
  grpc?: VirtualNodeGrpcConnectionPool;

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: VirtualNodeHttpConnectionPool;

  @SpeakeasyMetadata({ data: "json, name=http2" })
  http2?: VirtualNodeHttp2ConnectionPool;

  @SpeakeasyMetadata({ data: "json, name=tcp" })
  tcp?: VirtualNodeTcpConnectionPool;
}
