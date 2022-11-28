import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { RouteSpec } from "./routespec";
import { RouteStatus } from "./routestatus";
/**
 * An object representing a route returned by a describe operation.
**/
export declare class RouteData extends SpeakeasyBase {
    meshName: string;
    metadata?: ResourceMetadata;
    routeName: string;
    spec?: RouteSpec;
    status?: RouteStatus;
    virtualRouterName: string;
}
