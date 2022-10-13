package shared

import (
	"time"
)

type RestoreTableToPointInTimeInput struct {
	BillingModeOverride           *BillingModeEnum       `json:"BillingModeOverride"`
	GlobalSecondaryIndexOverride  []GlobalSecondaryIndex `json:"GlobalSecondaryIndexOverride"`
	LocalSecondaryIndexOverride   []LocalSecondaryIndex  `json:"LocalSecondaryIndexOverride"`
	ProvisionedThroughputOverride *ProvisionedThroughput `json:"ProvisionedThroughputOverride"`
	RestoreDateTime               *time.Time             `json:"RestoreDateTime"`
	SseSpecificationOverride      *SseSpecification      `json:"SSESpecificationOverride"`
	SourceTableArn                *string                `json:"SourceTableArn"`
	SourceTableName               *string                `json:"SourceTableName"`
	TargetTableName               string                 `json:"TargetTableName"`
	UseLatestRestorableTime       *bool                  `json:"UseLatestRestorableTime"`
}
