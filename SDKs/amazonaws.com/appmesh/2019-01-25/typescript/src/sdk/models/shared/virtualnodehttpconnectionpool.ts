import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualNodeHttpConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualNodeHttpConnectionPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxConnections" })
  maxConnections: number;

  @Metadata({ data: "json, name=maxPendingRequests" })
  maxPendingRequests?: number;
}
