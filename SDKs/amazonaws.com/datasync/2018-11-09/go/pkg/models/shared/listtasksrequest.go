package shared

type ListTasksRequest struct {
	Filters    []TaskFilter `json:"Filters,omitempty"`
	MaxResults *int64       `json:"MaxResults,omitempty"`
	NextToken  *string      `json:"NextToken,omitempty"`
}
