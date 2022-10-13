package shared

type DescribeExportTasksRequest struct {
	ExportIds  []string       `json:"exportIds"`
	Filters    []ExportFilter `json:"filters"`
	MaxResults *int64         `json:"maxResults"`
	NextToken  *string        `json:"nextToken"`
}
