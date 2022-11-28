import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelSpotInstanceRequestStateEnum } from "./cancelspotinstancerequeststateenum";



// CancelledSpotInstanceRequest
/** 
 * Describes a request to cancel a Spot Instance.
**/
export class CancelledSpotInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  spotInstanceRequestId?: string;

  @SpeakeasyMetadata()
  state?: CancelSpotInstanceRequestStateEnum;
}
