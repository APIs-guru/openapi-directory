import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetSummary } from "./targetsummary";
export declare class ListTargetsResult extends SpeakeasyBase {
    nextToken?: string;
    targets?: TargetSummary[];
}
