import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingGroup } from "./autoscalinggroup";
/**
 * An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
**/
export declare class NodegroupResources extends SpeakeasyBase {
    autoScalingGroups?: AutoScalingGroup[];
    remoteAccessSecurityGroup?: string;
}
