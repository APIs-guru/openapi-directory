package shared

type GetPartitionRequest struct {
	CatalogID       *string  `json:"CatalogId"`
	DatabaseName    string   `json:"DatabaseName"`
	PartitionValues []string `json:"PartitionValues"`
	TableName       string   `json:"TableName"`
}
