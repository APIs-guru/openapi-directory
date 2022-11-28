import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkInterfaceAssociation
/** 
 * Describes association information for an Elastic IP address (IPv4 only), or a Carrier IP address (for a network interface which resides in a subnet in a Wavelength Zone).
**/
export class NetworkInterfaceAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: string;

  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  carrierIp?: string;

  @SpeakeasyMetadata()
  customerOwnedIp?: string;

  @SpeakeasyMetadata()
  ipOwnerId?: string;

  @SpeakeasyMetadata()
  publicDnsName?: string;

  @SpeakeasyMetadata()
  publicIp?: string;
}
