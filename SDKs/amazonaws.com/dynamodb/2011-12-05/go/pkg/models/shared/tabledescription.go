package shared

import (
"time")

type TableDescription struct {
    CreationDateTime *time.Time `json:"CreationDateTime,omitempty"`
    ItemCount *int64 `json:"ItemCount,omitempty"`
    KeySchema *KeySchema `json:"KeySchema,omitempty"`
    ProvisionedThroughput *ProvisionedThroughputDescription `json:"ProvisionedThroughput,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    TableSizeBytes *int64 `json:"TableSizeBytes,omitempty"`
    TableStatus *TableStatusEnum `json:"TableStatus,omitempty"`
    
}

