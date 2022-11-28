import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a route returned by a list operation.
**/
export declare class RouteRef extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    meshName: string;
    meshOwner: string;
    resourceOwner: string;
    routeName: string;
    version: number;
    virtualRouterName: string;
}
