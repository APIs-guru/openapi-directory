package shared

type DescribeParameterGroupsRequest struct {
	MaxResults          *int64   `json:"MaxResults"`
	NextToken           *string  `json:"NextToken"`
	ParameterGroupNames []string `json:"ParameterGroupNames"`
}
