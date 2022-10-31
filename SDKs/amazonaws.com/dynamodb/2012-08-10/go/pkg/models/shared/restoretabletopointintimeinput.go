package shared

import (
	"time"
)

type RestoreTableToPointInTimeInput struct {
	BillingModeOverride           *BillingModeEnum       `json:"BillingModeOverride,omitempty"`
	GlobalSecondaryIndexOverride  []GlobalSecondaryIndex `json:"GlobalSecondaryIndexOverride,omitempty"`
	LocalSecondaryIndexOverride   []LocalSecondaryIndex  `json:"LocalSecondaryIndexOverride,omitempty"`
	ProvisionedThroughputOverride *ProvisionedThroughput `json:"ProvisionedThroughputOverride,omitempty"`
	RestoreDateTime               *time.Time             `json:"RestoreDateTime,omitempty"`
	SseSpecificationOverride      *SseSpecification      `json:"SSESpecificationOverride,omitempty"`
	SourceTableArn                *string                `json:"SourceTableArn,omitempty"`
	SourceTableName               *string                `json:"SourceTableName,omitempty"`
	TargetTableName               string                 `json:"TargetTableName"`
	UseLatestRestorableTime       *bool                  `json:"UseLatestRestorableTime,omitempty"`
}
