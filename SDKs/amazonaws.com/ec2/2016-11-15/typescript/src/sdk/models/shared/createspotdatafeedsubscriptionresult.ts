import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotDatafeedSubscription } from "./spotdatafeedsubscription";



// CreateSpotDatafeedSubscriptionResult
/** 
 * Contains the output of CreateSpotDatafeedSubscription.
**/
export class CreateSpotDatafeedSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  spotDatafeedSubscription?: SpotDatafeedSubscription;
}
