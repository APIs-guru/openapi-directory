package shared

type BatchDeletePartitionRequest struct {
	CatalogID          *string              `json:"CatalogId"`
	DatabaseName       string               `json:"DatabaseName"`
	PartitionsToDelete []PartitionValueList `json:"PartitionsToDelete"`
	TableName          string               `json:"TableName"`
}
