import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { BgpPeer } from "./bgppeer";
import { RouteFilterPrefix } from "./routefilterprefix";
import { Tag } from "./tag";
import { VirtualInterfaceStateEnum } from "./virtualinterfacestateenum";



// VirtualInterface
/** 
 * Information about a virtual interface.
**/
export class VirtualInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressFamily" })
  addressFamily?: AddressFamilyEnum;

  @SpeakeasyMetadata({ data: "json, name=amazonAddress" })
  amazonAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=amazonSideAsn" })
  amazonSideAsn?: number;

  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn?: number;

  @SpeakeasyMetadata({ data: "json, name=authKey" })
  authKey?: string;

  @SpeakeasyMetadata({ data: "json, name=awsDeviceV2" })
  awsDeviceV2?: string;

  @SpeakeasyMetadata({ data: "json, name=awsLogicalDeviceId" })
  awsLogicalDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=bgpPeers", elemType: BgpPeer })
  bgpPeers?: BgpPeer[];

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerAddress" })
  customerAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=customerRouterConfig" })
  customerRouterConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=jumboFrameCapable" })
  jumboFrameCapable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=mtu" })
  mtu?: number;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=routeFilterPrefixes", elemType: RouteFilterPrefix })
  routeFilterPrefixes?: RouteFilterPrefix[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceName" })
  virtualInterfaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceState" })
  virtualInterfaceState?: VirtualInterfaceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceType" })
  virtualInterfaceType?: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;
}
