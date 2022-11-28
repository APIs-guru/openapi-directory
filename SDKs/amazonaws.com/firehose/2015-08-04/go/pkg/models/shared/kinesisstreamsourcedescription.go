package shared

import (
	"time"
)

// KinesisStreamSourceDescription
// Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
type KinesisStreamSourceDescription struct {
	DeliveryStartTimestamp *time.Time `json:"DeliveryStartTimestamp,omitempty"`
	KinesisStreamArn       *string    `json:"KinesisStreamARN,omitempty"`
	RoleArn                *string    `json:"RoleARN,omitempty"`
}
