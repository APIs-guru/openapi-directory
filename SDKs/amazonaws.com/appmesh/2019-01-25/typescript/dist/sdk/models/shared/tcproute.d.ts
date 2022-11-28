import { SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteAction } from "./tcprouteaction";
import { TcpTimeout } from "./tcptimeout";
/**
 * An object that represents a TCP route type.
**/
export declare class TcpRoute extends SpeakeasyBase {
    action: TcpRouteAction;
    timeout?: TcpTimeout;
}
