import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceNetworkInterfaceAssociation } from "./instancenetworkinterfaceassociation";
import { InstanceNetworkInterfaceAttachment } from "./instancenetworkinterfaceattachment";
import { GroupIdentifier } from "./groupidentifier";
import { InstanceIpv4Prefix } from "./instanceipv4prefix";
import { InstanceIpv6Address } from "./instanceipv6address";
import { InstanceIpv6Prefix } from "./instanceipv6prefix";
import { InstancePrivateIpAddress } from "./instanceprivateipaddress";
import { NetworkInterfaceStatusEnum } from "./networkinterfacestatusenum";



// InstanceNetworkInterface
/** 
 * Describes a network interface.
**/
export class InstanceNetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: InstanceNetworkInterfaceAssociation;

  @SpeakeasyMetadata()
  attachment?: InstanceNetworkInterfaceAttachment;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: GroupIdentifier })
  groups?: GroupIdentifier[];

  @SpeakeasyMetadata()
  interfaceType?: string;

  @SpeakeasyMetadata({ elemType: InstanceIpv4Prefix })
  ipv4Prefixes?: InstanceIpv4Prefix[];

  @SpeakeasyMetadata({ elemType: InstanceIpv6Address })
  ipv6Addresses?: InstanceIpv6Address[];

  @SpeakeasyMetadata({ elemType: InstanceIpv6Prefix })
  ipv6Prefixes?: InstanceIpv6Prefix[];

  @SpeakeasyMetadata()
  macAddress?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  privateDnsName?: string;

  @SpeakeasyMetadata()
  privateIpAddress?: string;

  @SpeakeasyMetadata({ elemType: InstancePrivateIpAddress })
  privateIpAddresses?: InstancePrivateIpAddress[];

  @SpeakeasyMetadata()
  sourceDestCheck?: boolean;

  @SpeakeasyMetadata()
  status?: NetworkInterfaceStatusEnum;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
