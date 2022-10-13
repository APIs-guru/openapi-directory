package shared

import (
	"time"
)

type TableDescription struct {
	CreationDateTime      *time.Time                        `json:"CreationDateTime"`
	ItemCount             *int64                            `json:"ItemCount"`
	KeySchema             *KeySchema                        `json:"KeySchema"`
	ProvisionedThroughput *ProvisionedThroughputDescription `json:"ProvisionedThroughput"`
	TableName             *string                           `json:"TableName"`
	TableSizeBytes        *int64                            `json:"TableSizeBytes"`
	TableStatus           *TableStatusEnum                  `json:"TableStatus"`
}
