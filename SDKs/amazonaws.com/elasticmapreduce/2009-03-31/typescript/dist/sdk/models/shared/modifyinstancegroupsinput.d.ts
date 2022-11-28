import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupModifyConfig } from "./instancegroupmodifyconfig";
/**
 * Change the size of some instance groups.
**/
export declare class ModifyInstanceGroupsInput extends SpeakeasyBase {
    clusterId?: string;
    instanceGroups?: InstanceGroupModifyConfig[];
}
