import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceGroupConfig } from "./instancegroupconfig";


// AddInstanceGroupsInput
/** 
 * Input to an AddInstanceGroups call.
**/
export class AddInstanceGroupsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceGroups", elemType: shared.InstanceGroupConfig })
  instanceGroups: InstanceGroupConfig[];

  @Metadata({ data: "json, name=JobFlowId" })
  jobFlowId: string;
}
