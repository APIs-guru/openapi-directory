import { SpeakeasyBase } from "../../../internal/utils";
import { BatchStateEnum } from "./batchstateenum";
/**
 * Describes a Spot Fleet request that was successfully canceled.
**/
export declare class CancelSpotFleetRequestsSuccessItem extends SpeakeasyBase {
    currentSpotFleetRequestState?: BatchStateEnum;
    previousSpotFleetRequestState?: BatchStateEnum;
    spotFleetRequestId?: string;
}
