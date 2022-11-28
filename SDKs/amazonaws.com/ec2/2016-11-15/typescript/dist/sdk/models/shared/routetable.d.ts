import { SpeakeasyBase } from "../../../internal/utils";
import { RouteTableAssociation } from "./routetableassociation";
import { PropagatingVgw } from "./propagatingvgw";
import { Route } from "./route";
import { Tag } from "./tag";
/**
 * Describes a route table.
**/
export declare class RouteTable extends SpeakeasyBase {
    associations?: RouteTableAssociation[];
    ownerId?: string;
    propagatingVgws?: PropagatingVgw[];
    routeTableId?: string;
    routes?: Route[];
    tags?: Tag[];
    vpcId?: string;
}
