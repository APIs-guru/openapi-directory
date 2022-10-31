package shared

import (
"time")

type KinesisStreamSourceDescription struct {
    DeliveryStartTimestamp *time.Time `json:"DeliveryStartTimestamp,omitempty"`
    KinesisStreamArn *string `json:"KinesisStreamARN,omitempty"`
    RoleArn *string `json:"RoleARN,omitempty"`
    
}

