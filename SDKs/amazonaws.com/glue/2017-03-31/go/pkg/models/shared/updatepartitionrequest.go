package shared

type UpdatePartitionRequest struct {
	CatalogID          *string        `json:"CatalogId,omitempty"`
	DatabaseName       string         `json:"DatabaseName"`
	PartitionInput     PartitionInput `json:"PartitionInput"`
	PartitionValueList []string       `json:"PartitionValueList"`
	TableName          string         `json:"TableName"`
}
