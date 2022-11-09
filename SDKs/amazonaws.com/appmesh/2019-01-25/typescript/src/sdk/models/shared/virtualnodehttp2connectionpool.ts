import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualNodeHttp2ConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualNodeHttp2ConnectionPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxRequests" })
  maxRequests: number;
}
