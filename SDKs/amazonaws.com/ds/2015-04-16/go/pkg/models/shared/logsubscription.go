package shared

import (
	"time"
)

// LogSubscription
// Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.
type LogSubscription struct {
	DirectoryID                 *string    `json:"DirectoryId,omitempty"`
	LogGroupName                *string    `json:"LogGroupName,omitempty"`
	SubscriptionCreatedDateTime *time.Time `json:"SubscriptionCreatedDateTime,omitempty"`
}
