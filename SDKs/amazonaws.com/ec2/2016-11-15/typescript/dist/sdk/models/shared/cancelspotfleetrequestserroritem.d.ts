import { SpeakeasyBase } from "../../../internal/utils";
import { CancelSpotFleetRequestsError } from "./cancelspotfleetrequestserror";
/**
 * Describes a Spot Fleet request that was not successfully canceled.
**/
export declare class CancelSpotFleetRequestsErrorItem extends SpeakeasyBase {
    error?: CancelSpotFleetRequestsError;
    spotFleetRequestId?: string;
}
