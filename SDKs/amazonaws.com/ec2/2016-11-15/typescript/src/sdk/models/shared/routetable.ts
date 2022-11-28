import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteTableAssociation } from "./routetableassociation";
import { PropagatingVgw } from "./propagatingvgw";
import { Route } from "./route";
import { Tag } from "./tag";



// RouteTable
/** 
 * Describes a route table.
**/
export class RouteTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: RouteTableAssociation })
  associations?: RouteTableAssociation[];

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata({ elemType: PropagatingVgw })
  propagatingVgws?: PropagatingVgw[];

  @SpeakeasyMetadata()
  routeTableId?: string;

  @SpeakeasyMetadata({ elemType: Route })
  routes?: Route[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
