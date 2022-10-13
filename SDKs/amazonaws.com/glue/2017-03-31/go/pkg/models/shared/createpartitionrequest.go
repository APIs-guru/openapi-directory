package shared

type CreatePartitionRequest struct {
	CatalogID      *string        `json:"CatalogId"`
	DatabaseName   string         `json:"DatabaseName"`
	PartitionInput PartitionInput `json:"PartitionInput"`
	TableName      string         `json:"TableName"`
}
