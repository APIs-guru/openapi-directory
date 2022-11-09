import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkInterface
/** 
 * Describes a network interface.
**/
export class NetworkInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkInterfaceId" })
  networkInterfaceId?: string;

  @Metadata({ data: "json, name=subnetId" })
  subnetId?: string;
}
