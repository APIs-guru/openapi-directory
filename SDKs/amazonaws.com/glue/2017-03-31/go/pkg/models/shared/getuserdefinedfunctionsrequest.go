package shared

type GetUserDefinedFunctionsRequest struct {
	CatalogID    *string `json:"CatalogId"`
	DatabaseName *string `json:"DatabaseName"`
	MaxResults   *int64  `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
	Pattern      string  `json:"Pattern"`
}
