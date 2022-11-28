import { SpeakeasyBase } from "../../../internal/utils";
import { CancelSpotFleetRequestsSuccessItem } from "./cancelspotfleetrequestssuccessitem";
import { CancelSpotFleetRequestsErrorItem } from "./cancelspotfleetrequestserroritem";
/**
 * Contains the output of CancelSpotFleetRequests.
**/
export declare class CancelSpotFleetRequestsResponse extends SpeakeasyBase {
    successfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[];
    unsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[];
}
