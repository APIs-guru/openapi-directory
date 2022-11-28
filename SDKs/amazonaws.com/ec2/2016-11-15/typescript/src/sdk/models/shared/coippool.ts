import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// CoipPool
/** 
 * Describes a customer-owned address pool.
**/
export class CoipPool extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGatewayRouteTableId?: string;

  @SpeakeasyMetadata()
  poolArn?: string;

  @SpeakeasyMetadata()
  poolCidrs?: string[];

  @SpeakeasyMetadata()
  poolId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
