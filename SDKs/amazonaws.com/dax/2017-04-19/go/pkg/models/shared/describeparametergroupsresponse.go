package shared

type DescribeParameterGroupsResponse struct {
	NextToken       *string          `json:"NextToken,omitempty"`
	ParameterGroups []ParameterGroup `json:"ParameterGroups,omitempty"`
}
