import { SpeakeasyBase } from "../../../internal/utils";
import { HeaderMatchMethod } from "./headermatchmethod";
/**
 * An object that represents the HTTP header in the gateway route.
**/
export declare class HttpGatewayRouteHeader extends SpeakeasyBase {
    invert?: boolean;
    match?: HeaderMatchMethod;
    name: string;
}
