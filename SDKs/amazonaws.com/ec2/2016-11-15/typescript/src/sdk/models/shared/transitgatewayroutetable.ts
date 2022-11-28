import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRouteTableStateEnum } from "./transitgatewayroutetablestateenum";
import { Tag } from "./tag";



// TransitGatewayRouteTable
/** 
 * Describes a transit gateway route table.
**/
export class TransitGatewayRouteTable extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  defaultAssociationRouteTable?: boolean;

  @SpeakeasyMetadata()
  defaultPropagationRouteTable?: boolean;

  @SpeakeasyMetadata()
  state?: TransitGatewayRouteTableStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  transitGatewayId?: string;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: string;
}
