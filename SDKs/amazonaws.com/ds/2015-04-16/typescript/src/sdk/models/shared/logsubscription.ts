import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogSubscription
/** 
 * Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.
**/
export class LogSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionCreatedDateTime" })
  subscriptionCreatedDateTime?: Date;
}
