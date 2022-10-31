package shared



type DescribeParameterGroupsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ParameterGroupNames []string `json:"ParameterGroupNames,omitempty"`
    
}

