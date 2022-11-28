import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkInterface
/** 
 * An object representing the elastic network interface for a multi-node parallel job node.
**/
export class NetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=ipv6Address" })
  ipv6Address?: string;

  @SpeakeasyMetadata({ data: "json, name=privateIpv4Address" })
  privateIpv4Address?: string;
}
