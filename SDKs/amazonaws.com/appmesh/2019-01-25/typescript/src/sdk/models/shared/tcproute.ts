import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TcpRouteAction } from "./tcprouteaction";
import { TcpTimeout } from "./tcptimeout";


// TcpRoute
/** 
 * An object that represents a TCP route type.
**/
export class TcpRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: TcpRouteAction;

  @Metadata({ data: "json, name=timeout" })
  timeout?: TcpTimeout;
}
