package shared

type DeletePartitionIndexRequest struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName string  `json:"DatabaseName"`
	IndexName    string  `json:"IndexName"`
	TableName    string  `json:"TableName"`
}
