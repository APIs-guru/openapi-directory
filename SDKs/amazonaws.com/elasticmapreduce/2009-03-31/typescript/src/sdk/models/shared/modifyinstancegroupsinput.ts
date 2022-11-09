import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceGroupModifyConfig } from "./instancegroupmodifyconfig";


// ModifyInstanceGroupsInput
/** 
 * Change the size of some instance groups.
**/
export class ModifyInstanceGroupsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=InstanceGroups", elemType: shared.InstanceGroupModifyConfig })
  instanceGroups?: InstanceGroupModifyConfig[];
}
