import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualGatewayGrpcConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualGatewayGrpcConnectionPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxRequests" })
  maxRequests: number;
}
