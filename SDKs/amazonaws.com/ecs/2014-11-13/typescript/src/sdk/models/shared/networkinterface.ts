import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkInterface
/** 
 * An object representing the elastic network interface for tasks that use the <code>awsvpc</code> network mode.
**/
export class NetworkInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @Metadata({ data: "json, name=ipv6Address" })
  ipv6Address?: string;

  @Metadata({ data: "json, name=privateIpv4Address" })
  privateIpv4Address?: string;
}
