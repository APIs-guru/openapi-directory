package shared

import (
	"time"
)

// ConformancePackDetail
// Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.
type ConformancePackDetail struct {
	ConformancePackArn             string                          `json:"ConformancePackArn"`
	ConformancePackID              string                          `json:"ConformancePackId"`
	ConformancePackInputParameters []ConformancePackInputParameter `json:"ConformancePackInputParameters,omitempty"`
	ConformancePackName            string                          `json:"ConformancePackName"`
	CreatedBy                      *string                         `json:"CreatedBy,omitempty"`
	DeliveryS3Bucket               *string                         `json:"DeliveryS3Bucket,omitempty"`
	DeliveryS3KeyPrefix            *string                         `json:"DeliveryS3KeyPrefix,omitempty"`
	LastUpdateRequestedTime        *time.Time                      `json:"LastUpdateRequestedTime,omitempty"`
}
