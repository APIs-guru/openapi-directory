import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications.
**/
export declare class IdentityNotificationAttributes extends SpeakeasyBase {
    bounceTopic: string;
    complaintTopic: string;
    deliveryTopic: string;
    forwardingEnabled: boolean;
    headersInBounceNotificationsEnabled?: boolean;
    headersInComplaintNotificationsEnabled?: boolean;
    headersInDeliveryNotificationsEnabled?: boolean;
}
