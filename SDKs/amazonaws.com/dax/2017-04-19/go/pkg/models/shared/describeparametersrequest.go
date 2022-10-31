package shared

type DescribeParametersRequest struct {
	MaxResults         *int64  `json:"MaxResults,omitempty"`
	NextToken          *string `json:"NextToken,omitempty"`
	ParameterGroupName string  `json:"ParameterGroupName"`
	Source             *string `json:"Source,omitempty"`
}
