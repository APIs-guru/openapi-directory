import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { RouteFilterPrefix } from "./routefilterprefix";
import { Tag } from "./tag";


// NewPublicVirtualInterfaceAllocation
/** 
 * Information about a public virtual interface to be provisioned on a connection.
**/
export class NewPublicVirtualInterfaceAllocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressFamily" })
  addressFamily?: AddressFamilyEnum;

  @Metadata({ data: "json, name=amazonAddress" })
  amazonAddress?: string;

  @Metadata({ data: "json, name=asn" })
  asn: number;

  @Metadata({ data: "json, name=authKey" })
  authKey?: string;

  @Metadata({ data: "json, name=customerAddress" })
  customerAddress?: string;

  @Metadata({ data: "json, name=routeFilterPrefixes", elemType: shared.RouteFilterPrefix })
  routeFilterPrefixes?: RouteFilterPrefix[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=virtualInterfaceName" })
  virtualInterfaceName: string;

  @Metadata({ data: "json, name=vlan" })
  vlan: number;
}
