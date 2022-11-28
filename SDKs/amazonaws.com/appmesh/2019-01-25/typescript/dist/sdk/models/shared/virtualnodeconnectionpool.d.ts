import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeGrpcConnectionPool } from "./virtualnodegrpcconnectionpool";
import { VirtualNodeHttpConnectionPool } from "./virtualnodehttpconnectionpool";
import { VirtualNodeHttp2ConnectionPool } from "./virtualnodehttp2connectionpool";
import { VirtualNodeTcpConnectionPool } from "./virtualnodetcpconnectionpool";
/**
 * <p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/>
**/
export declare class VirtualNodeConnectionPool extends SpeakeasyBase {
    grpc?: VirtualNodeGrpcConnectionPool;
    http?: VirtualNodeHttpConnectionPool;
    http2?: VirtualNodeHttp2ConnectionPool;
    tcp?: VirtualNodeTcpConnectionPool;
}
