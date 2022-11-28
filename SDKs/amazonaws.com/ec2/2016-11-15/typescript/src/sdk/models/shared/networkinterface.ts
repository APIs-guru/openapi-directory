import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfaceAssociation } from "./networkinterfaceassociation";
import { NetworkInterfaceAttachment } from "./networkinterfaceattachment";
import { GroupIdentifier } from "./groupidentifier";
import { NetworkInterfaceTypeEnum } from "./networkinterfacetypeenum";
import { Ipv4PrefixSpecification } from "./ipv4prefixspecification";
import { NetworkInterfaceIpv6Address } from "./networkinterfaceipv6address";
import { Ipv6PrefixSpecification } from "./ipv6prefixspecification";
import { NetworkInterfacePrivateIpAddress } from "./networkinterfaceprivateipaddress";
import { NetworkInterfaceStatusEnum } from "./networkinterfacestatusenum";
import { Tag } from "./tag";



// NetworkInterface
/** 
 * Describes a network interface.
**/
export class NetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: NetworkInterfaceAssociation;

  @SpeakeasyMetadata()
  attachment?: NetworkInterfaceAttachment;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: GroupIdentifier })
  groups?: GroupIdentifier[];

  @SpeakeasyMetadata()
  interfaceType?: NetworkInterfaceTypeEnum;

  @SpeakeasyMetadata({ elemType: Ipv4PrefixSpecification })
  ipv4Prefixes?: Ipv4PrefixSpecification[];

  @SpeakeasyMetadata({ elemType: NetworkInterfaceIpv6Address })
  ipv6Addresses?: NetworkInterfaceIpv6Address[];

  @SpeakeasyMetadata({ elemType: Ipv6PrefixSpecification })
  ipv6Prefixes?: Ipv6PrefixSpecification[];

  @SpeakeasyMetadata()
  macAddress?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  privateDnsName?: string;

  @SpeakeasyMetadata()
  privateIpAddress?: string;

  @SpeakeasyMetadata({ elemType: NetworkInterfacePrivateIpAddress })
  privateIpAddresses?: NetworkInterfacePrivateIpAddress[];

  @SpeakeasyMetadata()
  requesterId?: string;

  @SpeakeasyMetadata()
  requesterManaged?: boolean;

  @SpeakeasyMetadata()
  sourceDestCheck?: boolean;

  @SpeakeasyMetadata()
  status?: NetworkInterfaceStatusEnum;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tagSet?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
