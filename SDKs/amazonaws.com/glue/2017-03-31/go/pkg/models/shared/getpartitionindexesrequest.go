package shared

type GetPartitionIndexesRequest struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName string  `json:"DatabaseName"`
	NextToken    *string `json:"NextToken"`
	TableName    string  `json:"TableName"`
}
