package shared

type DeletePartitionRequest struct {
	CatalogID       *string  `json:"CatalogId,omitempty"`
	DatabaseName    string   `json:"DatabaseName"`
	PartitionValues []string `json:"PartitionValues"`
	TableName       string   `json:"TableName"`
}
