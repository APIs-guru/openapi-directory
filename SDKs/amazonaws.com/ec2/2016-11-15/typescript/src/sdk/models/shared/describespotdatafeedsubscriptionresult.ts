import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotDatafeedSubscription } from "./spotdatafeedsubscription";



// DescribeSpotDatafeedSubscriptionResult
/** 
 * Contains the output of DescribeSpotDatafeedSubscription.
**/
export class DescribeSpotDatafeedSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  spotDatafeedSubscription?: SpotDatafeedSubscription;
}
