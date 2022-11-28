import { SpeakeasyBase } from "../../../internal/utils";
import { RouteTableAssociationState } from "./routetableassociationstate";
/**
 * Describes an association between a route table and a subnet or gateway.
**/
export declare class RouteTableAssociation extends SpeakeasyBase {
    associationState?: RouteTableAssociationState;
    gatewayId?: string;
    main?: boolean;
    routeTableAssociationId?: string;
    routeTableId?: string;
    subnetId?: string;
}
