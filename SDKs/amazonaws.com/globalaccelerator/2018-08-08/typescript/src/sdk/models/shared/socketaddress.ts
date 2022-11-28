import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SocketAddress
/** 
 * An IP address/port combination.
**/
export class SocketAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;
}
