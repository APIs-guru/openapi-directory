import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// LocalGatewayRouteTableVpcAssociation
/** 
 * Describes an association between a local gateway route table and a VPC.
**/
export class LocalGatewayRouteTableVpcAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGatewayId?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableArn?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableId?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableVpcAssociationId?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
