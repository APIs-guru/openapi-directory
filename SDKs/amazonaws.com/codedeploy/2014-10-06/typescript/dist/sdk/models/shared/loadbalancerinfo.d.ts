import { SpeakeasyBase } from "../../../internal/utils";
import { ElbInfo } from "./elbinfo";
import { TargetGroupInfo } from "./targetgroupinfo";
import { TargetGroupPairInfo } from "./targetgrouppairinfo";
/**
 * Information about the Elastic Load Balancing load balancer or target group used in a deployment.
**/
export declare class LoadBalancerInfo extends SpeakeasyBase {
    elbInfoList?: ElbInfo[];
    targetGroupInfoList?: TargetGroupInfo[];
    targetGroupPairInfoList?: TargetGroupPairInfo[];
}
