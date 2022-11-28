import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotInstanceRequest } from "./spotinstancerequest";



// RequestSpotInstancesResult
/** 
 * Contains the output of RequestSpotInstances.
**/
export class RequestSpotInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SpotInstanceRequest })
  spotInstanceRequests?: SpotInstanceRequest[];
}
