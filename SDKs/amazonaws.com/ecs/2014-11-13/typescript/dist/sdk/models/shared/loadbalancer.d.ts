import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p>
**/
export declare class LoadBalancer extends SpeakeasyBase {
    containerName?: string;
    containerPort?: number;
    loadBalancerName?: string;
    targetGroupArn?: string;
}
