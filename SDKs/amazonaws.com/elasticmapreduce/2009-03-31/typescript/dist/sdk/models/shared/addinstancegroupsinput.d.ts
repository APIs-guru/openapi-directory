import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupConfig } from "./instancegroupconfig";
/**
 * Input to an AddInstanceGroups call.
**/
export declare class AddInstanceGroupsInput extends SpeakeasyBase {
    instanceGroups: InstanceGroupConfig[];
    jobFlowId: string;
}
