import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchStateEnum } from "./batchstateenum";



// CancelSpotFleetRequestsSuccessItem
/** 
 * Describes a Spot Fleet request that was successfully canceled.
**/
export class CancelSpotFleetRequestsSuccessItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currentSpotFleetRequestState?: BatchStateEnum;

  @SpeakeasyMetadata()
  previousSpotFleetRequestState?: BatchStateEnum;

  @SpeakeasyMetadata()
  spotFleetRequestId?: string;
}
