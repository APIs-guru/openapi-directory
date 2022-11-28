import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayGrpcConnectionPool } from "./virtualgatewaygrpcconnectionpool";
import { VirtualGatewayHttpConnectionPool } from "./virtualgatewayhttpconnectionpool";
import { VirtualGatewayHttp2ConnectionPool } from "./virtualgatewayhttp2connectionpool";
/**
 * <p>An object that represents the type of virtual gateway connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p>
**/
export declare class VirtualGatewayConnectionPool extends SpeakeasyBase {
    grpc?: VirtualGatewayGrpcConnectionPool;
    http?: VirtualGatewayHttpConnectionPool;
    http2?: VirtualGatewayHttp2ConnectionPool;
}
