package shared

type GetTablesRequest struct {
	CatalogID    *string `json:"CatalogId,omitempty"`
	DatabaseName string  `json:"DatabaseName"`
	Expression   *string `json:"Expression,omitempty"`
	MaxResults   *int64  `json:"MaxResults,omitempty"`
	NextToken    *string `json:"NextToken,omitempty"`
}
