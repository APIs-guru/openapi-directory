package shared

type CreateTableRequest struct {
	CatalogID        *string          `json:"CatalogId"`
	DatabaseName     string           `json:"DatabaseName"`
	PartitionIndexes []PartitionIndex `json:"PartitionIndexes"`
	TableInput       TableInput       `json:"TableInput"`
}
