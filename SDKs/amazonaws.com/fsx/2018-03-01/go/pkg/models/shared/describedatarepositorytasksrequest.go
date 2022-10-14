package shared

type DescribeDataRepositoryTasksRequest struct {
	Filters    []DataRepositoryTaskFilter `json:"Filters,omitempty"`
	MaxResults *int64                     `json:"MaxResults,omitempty"`
	NextToken  *string                    `json:"NextToken,omitempty"`
	TaskIds    []string                   `json:"TaskIds,omitempty"`
}
