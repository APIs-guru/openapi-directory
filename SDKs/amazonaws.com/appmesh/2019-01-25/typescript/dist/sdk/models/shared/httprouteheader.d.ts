import { SpeakeasyBase } from "../../../internal/utils";
import { HeaderMatchMethod } from "./headermatchmethod";
/**
 * An object that represents the HTTP header in the request.
**/
export declare class HttpRouteHeader extends SpeakeasyBase {
    invert?: boolean;
    match?: HeaderMatchMethod;
    name: string;
}
