import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualGatewayHttpConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualGatewayHttpConnectionPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxConnections" })
  maxConnections: number;

  @Metadata({ data: "json, name=maxPendingRequests" })
  maxPendingRequests?: number;
}
