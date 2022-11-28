import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteAction } from "./httprouteaction";
import { HttpRouteMatch } from "./httproutematch";
/**
 * An object representing the HTTP routing specification for a route.
**/
export declare class HttpRoute extends SpeakeasyBase {
    action?: HttpRouteAction;
    match?: HttpRouteMatch;
}
