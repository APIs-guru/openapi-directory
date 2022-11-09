import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoScalingGroup } from "./autoscalinggroup";


// NodegroupResources
/** 
 * An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
**/
export class NodegroupResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoScalingGroups", elemType: shared.AutoScalingGroup })
  autoScalingGroups?: AutoScalingGroup[];

  @Metadata({ data: "json, name=remoteAccessSecurityGroup" })
  remoteAccessSecurityGroup?: string;
}
