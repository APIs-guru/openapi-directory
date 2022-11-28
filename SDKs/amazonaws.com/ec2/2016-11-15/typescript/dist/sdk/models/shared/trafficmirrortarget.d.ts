import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TrafficMirrorTargetTypeEnum } from "./trafficmirrortargettypeenum";
/**
 * Describes a Traffic Mirror target.
**/
export declare class TrafficMirrorTarget extends SpeakeasyBase {
    description?: string;
    networkInterfaceId?: string;
    networkLoadBalancerArn?: string;
    ownerId?: string;
    tags?: Tag[];
    trafficMirrorTargetId?: string;
    type?: TrafficMirrorTargetTypeEnum;
}
