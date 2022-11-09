import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VirtualNodeTcpConnectionPool
/** 
 * An object that represents a type of connection pool.
**/
export class VirtualNodeTcpConnectionPool extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxConnections" })
  maxConnections: number;
}
