import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficRoute } from "./trafficroute";
import { TargetGroupInfo } from "./targetgroupinfo";
/**
 *  Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified.
**/
export declare class TargetGroupPairInfo extends SpeakeasyBase {
    prodTrafficRoute?: TrafficRoute;
    targetGroups?: TargetGroupInfo[];
    testTrafficRoute?: TrafficRoute;
}
