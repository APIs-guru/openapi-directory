import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayGrpcConnectionPool } from "./virtualgatewaygrpcconnectionpool";
import { VirtualGatewayHttpConnectionPool } from "./virtualgatewayhttpconnectionpool";
import { VirtualGatewayHttp2ConnectionPool } from "./virtualgatewayhttp2connectionpool";



// VirtualGatewayConnectionPool
/** 
 * <p>An object that represents the type of virtual gateway connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p>
**/
export class VirtualGatewayConnectionPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grpc" })
  grpc?: VirtualGatewayGrpcConnectionPool;

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: VirtualGatewayHttpConnectionPool;

  @SpeakeasyMetadata({ data: "json, name=http2" })
  http2?: VirtualGatewayHttp2ConnectionPool;
}
