import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrafficRoute
/** 
 *  Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. 
**/
export class TrafficRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listenerArns" })
  listenerArns?: string[];
}
