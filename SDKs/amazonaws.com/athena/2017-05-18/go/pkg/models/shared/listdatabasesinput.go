package shared

type ListDatabasesInput struct {
	CatalogName string  `json:"CatalogName"`
	MaxResults  *int64  `json:"MaxResults,omitempty"`
	NextToken   *string `json:"NextToken,omitempty"`
}
