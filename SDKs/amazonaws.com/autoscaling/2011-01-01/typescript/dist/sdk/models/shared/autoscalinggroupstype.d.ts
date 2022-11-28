import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroup } from "./autoscalinggroup";
export declare class AutoScalingGroupsType extends SpeakeasyBase {
    autoScalingGroups: AutoScalingGroup[];
    nextToken?: string;
}
