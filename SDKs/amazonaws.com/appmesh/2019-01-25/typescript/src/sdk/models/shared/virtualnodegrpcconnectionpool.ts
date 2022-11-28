import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualNodeGrpcConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualNodeGrpcConnectionPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxRequests" })
  maxRequests: number;
}
