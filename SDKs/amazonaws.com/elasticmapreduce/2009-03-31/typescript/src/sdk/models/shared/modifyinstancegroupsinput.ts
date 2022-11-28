import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupModifyConfig } from "./instancegroupmodifyconfig";



// ModifyInstanceGroupsInput
/** 
 * Change the size of some instance groups.
**/
export class ModifyInstanceGroupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceGroups", elemType: InstanceGroupModifyConfig })
  instanceGroups?: InstanceGroupModifyConfig[];
}
