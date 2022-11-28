import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ipv4PrefixSpecificationRequest } from "./ipv4prefixspecificationrequest";
import { InstanceIpv6Address } from "./instanceipv6address";
import { Ipv6PrefixSpecificationRequest } from "./ipv6prefixspecificationrequest";
import { PrivateIpAddressSpecification } from "./privateipaddressspecification";



// InstanceNetworkInterfaceSpecification
/** 
 * Describes a network interface.
**/
export class InstanceNetworkInterfaceSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associateCarrierIpAddress?: boolean;

  @SpeakeasyMetadata()
  associatePublicIpAddress?: boolean;

  @SpeakeasyMetadata()
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  deviceIndex?: number;

  @SpeakeasyMetadata()
  groups?: string[];

  @SpeakeasyMetadata()
  interfaceType?: string;

  @SpeakeasyMetadata()
  ipv4PrefixCount?: number;

  @SpeakeasyMetadata({ elemType: Ipv4PrefixSpecificationRequest })
  ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];

  @SpeakeasyMetadata()
  ipv6AddressCount?: number;

  @SpeakeasyMetadata({ elemType: InstanceIpv6Address })
  ipv6Addresses?: InstanceIpv6Address[];

  @SpeakeasyMetadata()
  ipv6PrefixCount?: number;

  @SpeakeasyMetadata({ elemType: Ipv6PrefixSpecificationRequest })
  ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];

  @SpeakeasyMetadata()
  networkCardIndex?: number;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  privateIpAddress?: string;

  @SpeakeasyMetadata({ elemType: PrivateIpAddressSpecification })
  privateIpAddresses?: PrivateIpAddressSpecification[];

  @SpeakeasyMetadata()
  secondaryPrivateIpAddressCount?: number;

  @SpeakeasyMetadata()
  subnetId?: string;
}
