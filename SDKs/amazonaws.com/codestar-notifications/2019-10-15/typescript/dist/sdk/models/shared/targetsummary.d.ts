import { SpeakeasyBase } from "../../../internal/utils";
import { TargetStatusEnum } from "./targetstatusenum";
/**
 * Information about the targets specified for a notification rule.
**/
export declare class TargetSummary extends SpeakeasyBase {
    targetAddress?: string;
    targetStatus?: TargetStatusEnum;
    targetType?: string;
}
