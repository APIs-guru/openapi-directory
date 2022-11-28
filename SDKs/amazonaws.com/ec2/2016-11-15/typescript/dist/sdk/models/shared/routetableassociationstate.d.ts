import { SpeakeasyBase } from "../../../internal/utils";
import { RouteTableAssociationStateCodeEnum } from "./routetableassociationstatecodeenum";
/**
 * Describes the state of an association between a route table and a subnet or gateway.
**/
export declare class RouteTableAssociationState extends SpeakeasyBase {
    state?: RouteTableAssociationStateCodeEnum;
    statusMessage?: string;
}
