package shared

import (
	"time"
)

type EventTopic struct {
	CreatedDateTime *time.Time       `json:"CreatedDateTime"`
	DirectoryID     *string          `json:"DirectoryId"`
	Status          *TopicStatusEnum `json:"Status"`
	TopicArn        *string          `json:"TopicArn"`
	TopicName       *string          `json:"TopicName"`
}
