import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupConfig } from "./instancegroupconfig";



// AddInstanceGroupsInput
/** 
 * Input to an AddInstanceGroups call.
**/
export class AddInstanceGroupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceGroups", elemType: InstanceGroupConfig })
  instanceGroups: InstanceGroupConfig[];

  @SpeakeasyMetadata({ data: "json, name=JobFlowId" })
  jobFlowId: string;
}
