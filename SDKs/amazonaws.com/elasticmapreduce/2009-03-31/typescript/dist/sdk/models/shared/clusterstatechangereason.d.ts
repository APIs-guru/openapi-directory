import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateChangeReasonCodeEnum } from "./clusterstatechangereasoncodeenum";
/**
 * The reason that the cluster changed to its current state.
**/
export declare class ClusterStateChangeReason extends SpeakeasyBase {
    code?: ClusterStateChangeReasonCodeEnum;
    message?: string;
}
