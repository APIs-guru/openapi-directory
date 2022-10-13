package shared

type UpdatePartitionRequest struct {
	CatalogID          *string        `json:"CatalogId"`
	DatabaseName       string         `json:"DatabaseName"`
	PartitionInput     PartitionInput `json:"PartitionInput"`
	PartitionValueList []string       `json:"PartitionValueList"`
	TableName          string         `json:"TableName"`
}
