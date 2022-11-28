import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementGroupStateEnum } from "./placementgroupstateenum";
import { PlacementStrategyEnum } from "./placementstrategyenum";
import { Tag } from "./tag";
/**
 * Describes a placement group.
**/
export declare class PlacementGroup extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
    partitionCount?: number;
    state?: PlacementGroupStateEnum;
    strategy?: PlacementStrategyEnum;
    tags?: Tag[];
}
