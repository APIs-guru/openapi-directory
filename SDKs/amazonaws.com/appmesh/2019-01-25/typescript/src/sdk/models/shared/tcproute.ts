import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteAction } from "./tcprouteaction";
import { TcpTimeout } from "./tcptimeout";



// TcpRoute
/** 
 * An object that represents a TCP route type.
**/
export class TcpRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: TcpRouteAction;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: TcpTimeout;
}
