import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SocketAddress
/** 
 * An IP address/port combination.
**/
export class SocketAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;
}
