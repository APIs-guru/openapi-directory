package shared

type DescribeImportTasksRequest struct {
	Filters    []ImportTaskFilter `json:"filters"`
	MaxResults *int64             `json:"maxResults"`
	NextToken  *string            `json:"nextToken"`
}
