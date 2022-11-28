import { SpeakeasyBase } from "../../../internal/utils";
import { TargetGroupStickinessConfig } from "./targetgroupstickinessconfig";
import { TargetGroupTuple } from "./targetgrouptuple";
/**
 * Information about a forward action.
**/
export declare class ForwardActionConfig extends SpeakeasyBase {
    targetGroupStickinessConfig?: TargetGroupStickinessConfig;
    targetGroups?: TargetGroupTuple[];
}
