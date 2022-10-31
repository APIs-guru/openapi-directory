package shared

import (
	"time"
)

type EventTopic struct {
	CreatedDateTime *time.Time       `json:"CreatedDateTime,omitempty"`
	DirectoryID     *string          `json:"DirectoryId,omitempty"`
	Status          *TopicStatusEnum `json:"Status,omitempty"`
	TopicArn        *string          `json:"TopicArn,omitempty"`
	TopicName       *string          `json:"TopicName,omitempty"`
}
