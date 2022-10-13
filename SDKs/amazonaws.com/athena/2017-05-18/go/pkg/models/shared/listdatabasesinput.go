package shared

type ListDatabasesInput struct {
	CatalogName string  `json:"CatalogName"`
	MaxResults  *int64  `json:"MaxResults"`
	NextToken   *string `json:"NextToken"`
}
