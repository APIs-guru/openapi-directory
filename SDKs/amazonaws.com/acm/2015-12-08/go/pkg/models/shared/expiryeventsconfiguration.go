package shared

// ExpiryEventsConfiguration
// Object containing expiration events options associated with an Amazon Web Services account.
type ExpiryEventsConfiguration struct {
	DaysBeforeExpiry *int64 `json:"DaysBeforeExpiry,omitempty"`
}
