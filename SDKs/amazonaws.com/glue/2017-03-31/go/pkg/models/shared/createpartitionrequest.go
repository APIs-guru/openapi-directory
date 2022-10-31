package shared

type CreatePartitionRequest struct {
	CatalogID      *string        `json:"CatalogId,omitempty"`
	DatabaseName   string         `json:"DatabaseName"`
	PartitionInput PartitionInput `json:"PartitionInput"`
	TableName      string         `json:"TableName"`
}
