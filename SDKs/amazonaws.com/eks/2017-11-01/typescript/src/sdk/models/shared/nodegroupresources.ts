import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroup } from "./autoscalinggroup";



// NodegroupResources
/** 
 * An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
**/
export class NodegroupResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoScalingGroups", elemType: AutoScalingGroup })
  autoScalingGroups?: AutoScalingGroup[];

  @SpeakeasyMetadata({ data: "json, name=remoteAccessSecurityGroup" })
  remoteAccessSecurityGroup?: string;
}
