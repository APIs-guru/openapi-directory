package shared

type ListTableMetadataInput struct {
	CatalogName  string  `json:"CatalogName"`
	DatabaseName string  `json:"DatabaseName"`
	Expression   *string `json:"Expression"`
	MaxResults   *int64  `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
}
