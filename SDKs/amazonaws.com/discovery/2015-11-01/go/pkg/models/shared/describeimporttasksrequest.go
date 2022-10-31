package shared

type DescribeImportTasksRequest struct {
	Filters    []ImportTaskFilter `json:"filters,omitempty"`
	MaxResults *int64             `json:"maxResults,omitempty"`
	NextToken  *string            `json:"nextToken,omitempty"`
}
