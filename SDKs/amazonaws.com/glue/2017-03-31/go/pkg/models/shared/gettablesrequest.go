package shared

type GetTablesRequest struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName string  `json:"DatabaseName"`
	Expression   *string `json:"Expression"`
	MaxResults   *int64  `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
}
