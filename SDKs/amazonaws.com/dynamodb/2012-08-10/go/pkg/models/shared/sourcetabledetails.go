package shared

import (
	"time"
)

// SourceTableDetails
// Contains the details of the table when the backup was created.
type SourceTableDetails struct {
	BillingMode           *BillingModeEnum      `json:"BillingMode,omitempty"`
	ItemCount             *int64                `json:"ItemCount,omitempty"`
	KeySchema             []KeySchemaElement    `json:"KeySchema"`
	ProvisionedThroughput ProvisionedThroughput `json:"ProvisionedThroughput"`
	TableArn              *string               `json:"TableArn,omitempty"`
	TableCreationDateTime time.Time             `json:"TableCreationDateTime"`
	TableID               string                `json:"TableId"`
	TableName             string                `json:"TableName"`
	TableSizeBytes        *int64                `json:"TableSizeBytes,omitempty"`
}
