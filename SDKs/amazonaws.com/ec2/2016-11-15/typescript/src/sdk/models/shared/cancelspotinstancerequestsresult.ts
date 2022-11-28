import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelledSpotInstanceRequest } from "./cancelledspotinstancerequest";



// CancelSpotInstanceRequestsResult
/** 
 * Contains the output of CancelSpotInstanceRequests.
**/
export class CancelSpotInstanceRequestsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CancelledSpotInstanceRequest })
  cancelledSpotInstanceRequests?: CancelledSpotInstanceRequest[];
}
