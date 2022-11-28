import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// LocalGatewayRouteTable
/** 
 * Describes a local gateway route table.
**/
export class LocalGatewayRouteTable extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGatewayId?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableArn?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableId?: string;

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
