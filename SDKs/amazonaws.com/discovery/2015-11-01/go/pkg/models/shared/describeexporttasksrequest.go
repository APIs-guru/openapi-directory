package shared

type DescribeExportTasksRequest struct {
	ExportIds  []string       `json:"exportIds,omitempty"`
	Filters    []ExportFilter `json:"filters,omitempty"`
	MaxResults *int64         `json:"maxResults,omitempty"`
	NextToken  *string        `json:"nextToken,omitempty"`
}
