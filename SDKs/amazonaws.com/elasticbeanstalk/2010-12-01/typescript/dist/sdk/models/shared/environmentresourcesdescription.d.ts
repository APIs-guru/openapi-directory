import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerDescription } from "./loadbalancerdescription";
/**
 * Describes the AWS resources in use by this environment. This data is not live data.
**/
export declare class EnvironmentResourcesDescription extends SpeakeasyBase {
    loadBalancer?: LoadBalancerDescription;
}
