import { SpeakeasyBase } from "../../../internal/utils";
import { CancelSpotInstanceRequestStateEnum } from "./cancelspotinstancerequeststateenum";
/**
 * Describes a request to cancel a Spot Instance.
**/
export declare class CancelledSpotInstanceRequest extends SpeakeasyBase {
    spotInstanceRequestId?: string;
    state?: CancelSpotInstanceRequestStateEnum;
}
