import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ipv4PrefixSpecificationResponse } from "./ipv4prefixspecificationresponse";
import { InstanceIpv6Address } from "./instanceipv6address";
import { Ipv6PrefixSpecificationResponse } from "./ipv6prefixspecificationresponse";
import { PrivateIpAddressSpecification } from "./privateipaddressspecification";



// LaunchTemplateInstanceNetworkInterfaceSpecification
/** 
 * Describes a network interface.
**/
export class LaunchTemplateInstanceNetworkInterfaceSpecification extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: Ipv4PrefixSpecificationResponse })
  ipv4Prefixes?: Ipv4PrefixSpecificationResponse[];

  @SpeakeasyMetadata()
  ipv6AddressCount?: number;

  @SpeakeasyMetadata({ elemType: InstanceIpv6Address })
  ipv6Addresses?: InstanceIpv6Address[];

  @SpeakeasyMetadata()
  ipv6PrefixCount?: number;

  @SpeakeasyMetadata({ elemType: Ipv6PrefixSpecificationResponse })
  ipv6Prefixes?: Ipv6PrefixSpecificationResponse[];

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
