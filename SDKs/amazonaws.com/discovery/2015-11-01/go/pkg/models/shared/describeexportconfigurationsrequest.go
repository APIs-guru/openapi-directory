package shared

type DescribeExportConfigurationsRequest struct {
	ExportIds  []string `json:"exportIds"`
	MaxResults *int64   `json:"maxResults"`
	NextToken  *string  `json:"nextToken"`
}
