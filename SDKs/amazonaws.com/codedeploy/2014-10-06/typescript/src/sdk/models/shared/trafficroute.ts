import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrafficRoute
/** 
 *  Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. 
**/
export class TrafficRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=listenerArns" })
  listenerArns?: string[];
}
