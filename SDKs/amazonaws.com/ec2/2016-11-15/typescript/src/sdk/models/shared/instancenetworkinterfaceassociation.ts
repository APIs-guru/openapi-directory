import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceNetworkInterfaceAssociation
/** 
 * Describes association information for an Elastic IP address (IPv4).
**/
export class InstanceNetworkInterfaceAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carrierIp?: string;

  @SpeakeasyMetadata()
  ipOwnerId?: string;

  @SpeakeasyMetadata()
  publicDnsName?: string;

  @SpeakeasyMetadata()
  publicIp?: string;
}
