package shared

import (
	"time"
)

type TableDescription struct {
	ArchivalSummary        *ArchivalSummary                  `json:"ArchivalSummary"`
	AttributeDefinitions   []AttributeDefinition             `json:"AttributeDefinitions"`
	BillingModeSummary     *BillingModeSummary               `json:"BillingModeSummary"`
	CreationDateTime       *time.Time                        `json:"CreationDateTime"`
	GlobalSecondaryIndexes []GlobalSecondaryIndexDescription `json:"GlobalSecondaryIndexes"`
	GlobalTableVersion     *string                           `json:"GlobalTableVersion"`
	ItemCount              *int64                            `json:"ItemCount"`
	KeySchema              []KeySchemaElement                `json:"KeySchema"`
	LatestStreamArn        *string                           `json:"LatestStreamArn"`
	LatestStreamLabel      *string                           `json:"LatestStreamLabel"`
	LocalSecondaryIndexes  []LocalSecondaryIndexDescription  `json:"LocalSecondaryIndexes"`
	ProvisionedThroughput  *ProvisionedThroughputDescription `json:"ProvisionedThroughput"`
	Replicas               []ReplicaDescription              `json:"Replicas"`
	RestoreSummary         *RestoreSummary                   `json:"RestoreSummary"`
	SseDescription         *SseDescription                   `json:"SSEDescription"`
	StreamSpecification    *StreamSpecification              `json:"StreamSpecification"`
	TableArn               *string                           `json:"TableArn"`
	TableID                *string                           `json:"TableId"`
	TableName              *string                           `json:"TableName"`
	TableSizeBytes         *int64                            `json:"TableSizeBytes"`
	TableStatus            *TableStatusEnum                  `json:"TableStatus"`
}
