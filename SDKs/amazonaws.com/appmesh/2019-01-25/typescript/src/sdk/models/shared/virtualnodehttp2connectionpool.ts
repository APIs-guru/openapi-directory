import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualNodeHttp2ConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualNodeHttp2ConnectionPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxRequests" })
  maxRequests: number;
}
