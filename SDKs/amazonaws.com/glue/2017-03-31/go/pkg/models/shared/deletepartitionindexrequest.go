package shared

type DeletePartitionIndexRequest struct {
	CatalogID    *string `json:"CatalogId,omitempty"`
	DatabaseName string  `json:"DatabaseName"`
	IndexName    string  `json:"IndexName"`
	TableName    string  `json:"TableName"`
}
