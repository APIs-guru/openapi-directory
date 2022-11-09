import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualNodeGrpcConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualNodeGrpcConnectionPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxRequests" })
  maxRequests: number;
}
