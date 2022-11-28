import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfaceAssociation } from "./networkinterfaceassociation";



// NetworkInterfacePrivateIpAddress
/** 
 * Describes the private IPv4 address of a network interface.
**/
export class NetworkInterfacePrivateIpAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: NetworkInterfaceAssociation;

  @SpeakeasyMetadata()
  primary?: boolean;

  @SpeakeasyMetadata()
  privateDnsName?: string;

  @SpeakeasyMetadata()
  privateIpAddress?: string;
}
