import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { Tag } from "./tag";



// NewTransitVirtualInterfaceAllocation
/** 
 * Information about a transit virtual interface to be provisioned on a connection.
**/
export class NewTransitVirtualInterfaceAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressFamily" })
  addressFamily?: AddressFamilyEnum;

  @SpeakeasyMetadata({ data: "json, name=amazonAddress" })
  amazonAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn?: number;

  @SpeakeasyMetadata({ data: "json, name=authKey" })
  authKey?: string;

  @SpeakeasyMetadata({ data: "json, name=customerAddress" })
  customerAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=mtu" })
  mtu?: number;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceName" })
  virtualInterfaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;
}
