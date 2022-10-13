package shared

type DescribeContinuousExportsRequest struct {
	ExportIds  []string `json:"exportIds"`
	MaxResults *int64   `json:"maxResults"`
	NextToken  *string  `json:"nextToken"`
}
