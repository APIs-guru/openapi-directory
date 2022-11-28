import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroup } from "./instancegroup";
/**
 * This input determines which instance groups to retrieve.
**/
export declare class ListInstanceGroupsOutput extends SpeakeasyBase {
    instanceGroups?: InstanceGroup[];
    marker?: string;
}
