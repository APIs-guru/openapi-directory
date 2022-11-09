import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualNodeGrpcConnectionPool } from "./virtualnodegrpcconnectionpool";
import { VirtualNodeHttpConnectionPool } from "./virtualnodehttpconnectionpool";
import { VirtualNodeHttp2ConnectionPool } from "./virtualnodehttp2connectionpool";
import { VirtualNodeTcpConnectionPool } from "./virtualnodetcpconnectionpool";


// VirtualNodeConnectionPool
/** 
 * <p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/>
**/
export class VirtualNodeConnectionPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=grpc" })
  grpc?: VirtualNodeGrpcConnectionPool;

  @Metadata({ data: "json, name=http" })
  http?: VirtualNodeHttpConnectionPool;

  @Metadata({ data: "json, name=http2" })
  http2?: VirtualNodeHttp2ConnectionPool;

  @Metadata({ data: "json, name=tcp" })
  tcp?: VirtualNodeTcpConnectionPool;
}
