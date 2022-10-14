package shared

type BatchDeletePartitionRequest struct {
	CatalogID          *string              `json:"CatalogId,omitempty"`
	DatabaseName       string               `json:"DatabaseName"`
	PartitionsToDelete []PartitionValueList `json:"PartitionsToDelete"`
	TableName          string               `json:"TableName"`
}
