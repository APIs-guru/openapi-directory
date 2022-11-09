import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoadBalancer
/** 
 * <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p>
**/
export class LoadBalancer extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName?: string;

  @Metadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @Metadata({ data: "json, name=loadBalancerName" })
  loadBalancerName?: string;

  @Metadata({ data: "json, name=targetGroupArn" })
  targetGroupArn?: string;
}
