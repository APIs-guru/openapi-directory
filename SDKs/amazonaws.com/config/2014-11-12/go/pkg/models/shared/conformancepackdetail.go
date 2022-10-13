package shared

import (
	"time"
)

type ConformancePackDetail struct {
	ConformancePackArn             string                          `json:"ConformancePackArn"`
	ConformancePackID              string                          `json:"ConformancePackId"`
	ConformancePackInputParameters []ConformancePackInputParameter `json:"ConformancePackInputParameters"`
	ConformancePackName            string                          `json:"ConformancePackName"`
	CreatedBy                      *string                         `json:"CreatedBy"`
	DeliveryS3Bucket               *string                         `json:"DeliveryS3Bucket"`
	DeliveryS3KeyPrefix            *string                         `json:"DeliveryS3KeyPrefix"`
	LastUpdateRequestedTime        *time.Time                      `json:"LastUpdateRequestedTime"`
}
