package shared

type GetUserDefinedFunctionsRequest struct {
	CatalogID    *string `json:"CatalogId,omitempty"`
	DatabaseName *string `json:"DatabaseName,omitempty"`
	MaxResults   *int64  `json:"MaxResults,omitempty"`
	NextToken    *string `json:"NextToken,omitempty"`
	Pattern      string  `json:"Pattern"`
}
