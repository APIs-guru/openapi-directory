package shared

type GetPartitionsRequest struct {
	CatalogID           *string  `json:"CatalogId"`
	DatabaseName        string   `json:"DatabaseName"`
	ExcludeColumnSchema *bool    `json:"ExcludeColumnSchema"`
	Expression          *string  `json:"Expression"`
	MaxResults          *int64   `json:"MaxResults"`
	NextToken           *string  `json:"NextToken"`
	Segment             *Segment `json:"Segment"`
	TableName           string   `json:"TableName"`
}
