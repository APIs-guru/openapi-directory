import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualGatewayHttp2ConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualGatewayHttp2ConnectionPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxRequests" })
  maxRequests: number;
}
