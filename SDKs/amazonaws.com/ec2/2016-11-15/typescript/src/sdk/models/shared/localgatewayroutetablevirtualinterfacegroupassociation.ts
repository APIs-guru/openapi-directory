import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// LocalGatewayRouteTableVirtualInterfaceGroupAssociation
/** 
 * Describes an association between a local gateway route table and a virtual interface group.
**/
export class LocalGatewayRouteTableVirtualInterfaceGroupAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGatewayId?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableArn?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableId?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;

  @SpeakeasyMetadata()
  localGatewayVirtualInterfaceGroupId?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
