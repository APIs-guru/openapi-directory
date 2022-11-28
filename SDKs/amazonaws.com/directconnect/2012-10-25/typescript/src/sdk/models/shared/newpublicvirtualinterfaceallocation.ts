import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { RouteFilterPrefix } from "./routefilterprefix";
import { Tag } from "./tag";



// NewPublicVirtualInterfaceAllocation
/** 
 * Information about a public virtual interface to be provisioned on a connection.
**/
export class NewPublicVirtualInterfaceAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressFamily" })
  addressFamily?: AddressFamilyEnum;

  @SpeakeasyMetadata({ data: "json, name=amazonAddress" })
  amazonAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn: number;

  @SpeakeasyMetadata({ data: "json, name=authKey" })
  authKey?: string;

  @SpeakeasyMetadata({ data: "json, name=customerAddress" })
  customerAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=routeFilterPrefixes", elemType: RouteFilterPrefix })
  routeFilterPrefixes?: RouteFilterPrefix[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceName" })
  virtualInterfaceName: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan: number;
}
