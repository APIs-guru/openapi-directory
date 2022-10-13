package shared

type DescribeParametersRequest struct {
	MaxResults         *int64  `json:"MaxResults"`
	NextToken          *string `json:"NextToken"`
	ParameterGroupName string  `json:"ParameterGroupName"`
	Source             *string `json:"Source"`
}
