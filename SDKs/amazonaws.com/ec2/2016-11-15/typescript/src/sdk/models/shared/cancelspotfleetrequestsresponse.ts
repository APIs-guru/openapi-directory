import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelSpotFleetRequestsSuccessItem } from "./cancelspotfleetrequestssuccessitem";
import { CancelSpotFleetRequestsErrorItem } from "./cancelspotfleetrequestserroritem";



// CancelSpotFleetRequestsResponse
/** 
 * Contains the output of CancelSpotFleetRequests.
**/
export class CancelSpotFleetRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CancelSpotFleetRequestsSuccessItem })
  successfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[];

  @SpeakeasyMetadata({ elemType: CancelSpotFleetRequestsErrorItem })
  unsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[];
}
