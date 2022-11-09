import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualGatewayHttp2ConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualGatewayHttp2ConnectionPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxRequests" })
  maxRequests: number;
}
