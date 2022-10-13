package shared

import (
	"time"
)

type KinesisStreamSourceDescription struct {
	DeliveryStartTimestamp *time.Time `json:"DeliveryStartTimestamp"`
	KinesisStreamArn       *string    `json:"KinesisStreamARN"`
	RoleArn                *string    `json:"RoleARN"`
}
