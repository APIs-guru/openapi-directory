import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityNotificationAttributes
/** 
 * Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications.
**/
export class IdentityNotificationAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bounceTopic: string;

  @SpeakeasyMetadata()
  complaintTopic: string;

  @SpeakeasyMetadata()
  deliveryTopic: string;

  @SpeakeasyMetadata()
  forwardingEnabled: boolean;

  @SpeakeasyMetadata()
  headersInBounceNotificationsEnabled?: boolean;

  @SpeakeasyMetadata()
  headersInComplaintNotificationsEnabled?: boolean;

  @SpeakeasyMetadata()
  headersInDeliveryNotificationsEnabled?: boolean;
}
