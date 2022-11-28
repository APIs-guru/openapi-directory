import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceGroupTypeEnum } from "./instancegrouptypeenum";
import { InstanceStateEnum } from "./instancestateenum";
/**
 * This input determines which instances to list.
**/
export declare class ListInstancesInput extends SpeakeasyBase {
    clusterId: string;
    instanceFleetId?: string;
    instanceFleetType?: InstanceFleetTypeEnum;
    instanceGroupId?: string;
    instanceGroupTypes?: InstanceGroupTypeEnum[];
    instanceStates?: InstanceStateEnum[];
    marker?: string;
}
