package shared

type ListTasksRequest struct {
	Filters    []TaskFilter `json:"Filters"`
	MaxResults *int64       `json:"MaxResults"`
	NextToken  *string      `json:"NextToken"`
}
