import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualNodeHttpConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualNodeHttpConnectionPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxConnections" })
  maxConnections: number;

  @SpeakeasyMetadata({ data: "json, name=maxPendingRequests" })
  maxPendingRequests?: number;
}
