import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceNetworkInterfaceAssociation } from "./instancenetworkinterfaceassociation";



// InstancePrivateIpAddress
/** 
 * Describes a private IPv4 address.
**/
export class InstancePrivateIpAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: InstanceNetworkInterfaceAssociation;

  @SpeakeasyMetadata()
  primary?: boolean;

  @SpeakeasyMetadata()
  privateDnsName?: string;

  @SpeakeasyMetadata()
  privateIpAddress?: string;
}
