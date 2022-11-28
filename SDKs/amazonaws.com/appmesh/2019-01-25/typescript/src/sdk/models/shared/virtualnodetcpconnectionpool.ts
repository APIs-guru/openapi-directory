import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VirtualNodeTcpConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualNodeTcpConnectionPool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxConnections" })
  maxConnections: number;
}
