import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotInstanceStateFault } from "./spotinstancestatefault";
import { DatafeedSubscriptionStateEnum } from "./datafeedsubscriptionstateenum";



// SpotDatafeedSubscription
/** 
 * Describes the data feed for a Spot Instance.
**/
export class SpotDatafeedSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucket?: string;

  @SpeakeasyMetadata()
  fault?: SpotInstanceStateFault;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  prefix?: string;

  @SpeakeasyMetadata()
  state?: DatafeedSubscriptionStateEnum;
}
