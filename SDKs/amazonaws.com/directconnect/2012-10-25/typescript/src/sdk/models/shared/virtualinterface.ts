import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=addressFamily" })
  addressFamily?: AddressFamilyEnum;

  @Metadata({ data: "json, name=amazonAddress" })
  amazonAddress?: string;

  @Metadata({ data: "json, name=amazonSideAsn" })
  amazonSideAsn?: number;

  @Metadata({ data: "json, name=asn" })
  asn?: number;

  @Metadata({ data: "json, name=authKey" })
  authKey?: string;

  @Metadata({ data: "json, name=awsDeviceV2" })
  awsDeviceV2?: string;

  @Metadata({ data: "json, name=awsLogicalDeviceId" })
  awsLogicalDeviceId?: string;

  @Metadata({ data: "json, name=bgpPeers", elemType: shared.BgpPeer })
  bgpPeers?: BgpPeer[];

  @Metadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @Metadata({ data: "json, name=customerAddress" })
  customerAddress?: string;

  @Metadata({ data: "json, name=customerRouterConfig" })
  customerRouterConfig?: string;

  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=jumboFrameCapable" })
  jumboFrameCapable?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=mtu" })
  mtu?: number;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=routeFilterPrefixes", elemType: shared.RouteFilterPrefix })
  routeFilterPrefixes?: RouteFilterPrefix[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;

  @Metadata({ data: "json, name=virtualInterfaceName" })
  virtualInterfaceName?: string;

  @Metadata({ data: "json, name=virtualInterfaceState" })
  virtualInterfaceState?: VirtualInterfaceStateEnum;

  @Metadata({ data: "json, name=virtualInterfaceType" })
  virtualInterfaceType?: string;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;
}
