import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelSpotFleetRequestsError } from "./cancelspotfleetrequestserror";



// CancelSpotFleetRequestsErrorItem
/** 
 * Describes a Spot Fleet request that was not successfully canceled.
**/
export class CancelSpotFleetRequestsErrorItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  error?: CancelSpotFleetRequestsError;

  @SpeakeasyMetadata()
  spotFleetRequestId?: string;
}
