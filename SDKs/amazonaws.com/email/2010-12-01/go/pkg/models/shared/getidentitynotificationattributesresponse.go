package shared

// GetIdentityNotificationAttributesResponse
// Represents the notification attributes for a list of identities.
type GetIdentityNotificationAttributesResponse struct {
	NotificationAttributes map[string]IdentityNotificationAttributes
}
