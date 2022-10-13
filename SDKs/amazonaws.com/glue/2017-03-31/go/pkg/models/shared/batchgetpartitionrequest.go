package shared

type BatchGetPartitionRequest struct {
	CatalogID       *string              `json:"CatalogId"`
	DatabaseName    string               `json:"DatabaseName"`
	PartitionsToGet []PartitionValueList `json:"PartitionsToGet"`
	TableName       string               `json:"TableName"`
}
