import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ElbInfo
/** 
 * Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer.
**/
export class ElbInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
