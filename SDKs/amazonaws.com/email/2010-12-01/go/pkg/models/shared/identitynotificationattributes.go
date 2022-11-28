package shared

// IdentityNotificationAttributes
// Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications.
type IdentityNotificationAttributes struct {
	BounceTopic                            string
	ComplaintTopic                         string
	DeliveryTopic                          string
	ForwardingEnabled                      bool
	HeadersInBounceNotificationsEnabled    *bool
	HeadersInComplaintNotificationsEnabled *bool
	HeadersInDeliveryNotificationsEnabled  *bool
}
