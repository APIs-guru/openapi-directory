package shared

import (
"time")

type TableDescription struct {
    ArchivalSummary *ArchivalSummary `json:"ArchivalSummary,omitempty"`
    AttributeDefinitions []AttributeDefinition `json:"AttributeDefinitions,omitempty"`
    BillingModeSummary *BillingModeSummary `json:"BillingModeSummary,omitempty"`
    CreationDateTime *time.Time `json:"CreationDateTime,omitempty"`
    GlobalSecondaryIndexes []GlobalSecondaryIndexDescription `json:"GlobalSecondaryIndexes,omitempty"`
    GlobalTableVersion *string `json:"GlobalTableVersion,omitempty"`
    ItemCount *int64 `json:"ItemCount,omitempty"`
    KeySchema []KeySchemaElement `json:"KeySchema,omitempty"`
    LatestStreamArn *string `json:"LatestStreamArn,omitempty"`
    LatestStreamLabel *string `json:"LatestStreamLabel,omitempty"`
    LocalSecondaryIndexes []LocalSecondaryIndexDescription `json:"LocalSecondaryIndexes,omitempty"`
    ProvisionedThroughput *ProvisionedThroughputDescription `json:"ProvisionedThroughput,omitempty"`
    Replicas []ReplicaDescription `json:"Replicas,omitempty"`
    RestoreSummary *RestoreSummary `json:"RestoreSummary,omitempty"`
    SseDescription *SseDescription `json:"SSEDescription,omitempty"`
    StreamSpecification *StreamSpecification `json:"StreamSpecification,omitempty"`
    TableArn *string `json:"TableArn,omitempty"`
    TableID *string `json:"TableId,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    TableSizeBytes *int64 `json:"TableSizeBytes,omitempty"`
    TableStatus *TableStatusEnum `json:"TableStatus,omitempty"`
    
}

