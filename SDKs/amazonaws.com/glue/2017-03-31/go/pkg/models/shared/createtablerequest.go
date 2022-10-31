package shared

type CreateTableRequest struct {
	CatalogID        *string          `json:"CatalogId,omitempty"`
	DatabaseName     string           `json:"DatabaseName"`
	PartitionIndexes []PartitionIndex `json:"PartitionIndexes,omitempty"`
	TableInput       TableInput       `json:"TableInput"`
}
