package shared

type CreatePartitionIndexRequest struct {
	CatalogID      *string        `json:"CatalogId"`
	DatabaseName   string         `json:"DatabaseName"`
	PartitionIndex PartitionIndex `json:"PartitionIndex"`
	TableName      string         `json:"TableName"`
}
