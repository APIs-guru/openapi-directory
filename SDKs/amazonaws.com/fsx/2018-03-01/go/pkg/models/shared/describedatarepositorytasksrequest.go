package shared

type DescribeDataRepositoryTasksRequest struct {
	Filters    []DataRepositoryTaskFilter `json:"Filters"`
	MaxResults *int64                     `json:"MaxResults"`
	NextToken  *string                    `json:"NextToken"`
	TaskIds    []string                   `json:"TaskIds"`
}
