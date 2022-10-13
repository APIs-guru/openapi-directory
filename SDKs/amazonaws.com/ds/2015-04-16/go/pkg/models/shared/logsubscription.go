package shared

import (
	"time"
)

type LogSubscription struct {
	DirectoryID                 *string    `json:"DirectoryId"`
	LogGroupName                *string    `json:"LogGroupName"`
	SubscriptionCreatedDateTime *time.Time `json:"SubscriptionCreatedDateTime"`
}
