import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoadBalancer
/** 
 * <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p>
**/
export class LoadBalancer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @SpeakeasyMetadata({ data: "json, name=loadBalancerName" })
  loadBalancerName?: string;

  @SpeakeasyMetadata({ data: "json, name=targetGroupArn" })
  targetGroupArn?: string;
}
