package shared

type BatchGetPartitionRequest struct {
	CatalogID       *string              `json:"CatalogId,omitempty"`
	DatabaseName    string               `json:"DatabaseName"`
	PartitionsToGet []PartitionValueList `json:"PartitionsToGet"`
	TableName       string               `json:"TableName"`
}
