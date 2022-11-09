import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualGatewayGrpcConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualGatewayGrpcConnectionPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxRequests" })
  maxRequests: number;
}
