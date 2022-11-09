import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { Tag } from "./tag";


// NewPrivateVirtualInterface
/** 
 * Information about a private virtual interface.
**/
export class NewPrivateVirtualInterface extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=mtu" })
  mtu?: number;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;

  @Metadata({ data: "json, name=virtualInterfaceName" })
  virtualInterfaceName: string;

  @Metadata({ data: "json, name=vlan" })
  vlan: number;
}
