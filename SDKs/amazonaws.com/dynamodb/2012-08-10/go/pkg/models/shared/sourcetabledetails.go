package shared

import (
	"time"
)

type SourceTableDetails struct {
	BillingMode           *BillingModeEnum      `json:"BillingMode"`
	ItemCount             *int64                `json:"ItemCount"`
	KeySchema             []KeySchemaElement    `json:"KeySchema"`
	ProvisionedThroughput ProvisionedThroughput `json:"ProvisionedThroughput"`
	TableArn              *string               `json:"TableArn"`
	TableCreationDateTime time.Time             `json:"TableCreationDateTime"`
	TableID               string                `json:"TableId"`
	TableName             string                `json:"TableName"`
	TableSizeBytes        *int64                `json:"TableSizeBytes"`
}
