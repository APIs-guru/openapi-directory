package shared

import (
"time")

type LogSubscription struct {
    DirectoryID *string `json:"DirectoryId,omitempty"`
    LogGroupName *string `json:"LogGroupName,omitempty"`
    SubscriptionCreatedDateTime *time.Time `json:"SubscriptionCreatedDateTime,omitempty"`
    
}

