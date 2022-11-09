import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogSubscription
/** 
 * Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.
**/
export class LogSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=SubscriptionCreatedDateTime" })
  subscriptionCreatedDateTime?: Date;
}
