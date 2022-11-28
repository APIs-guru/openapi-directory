package shared

import (
	"time"
)

// EventTopic
// Information about Amazon SNS topic and Directory Service directory associations.
type EventTopic struct {
	CreatedDateTime *time.Time       `json:"CreatedDateTime,omitempty"`
	DirectoryID     *string          `json:"DirectoryId,omitempty"`
	Status          *TopicStatusEnum `json:"Status,omitempty"`
	TopicArn        *string          `json:"TopicArn,omitempty"`
	TopicName       *string          `json:"TopicName,omitempty"`
}
