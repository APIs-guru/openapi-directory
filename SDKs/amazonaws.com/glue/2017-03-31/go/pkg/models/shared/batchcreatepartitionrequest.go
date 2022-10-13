package shared

type BatchCreatePartitionRequest struct {
	CatalogID          *string          `json:"CatalogId"`
	DatabaseName       string           `json:"DatabaseName"`
	PartitionInputList []PartitionInput `json:"PartitionInputList"`
	TableName          string           `json:"TableName"`
}
