package shared



type DescribeRemediationExecutionStatusRequest struct {
    ConfigRuleName string `json:"ConfigRuleName"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceKeys []ResourceKey `json:"ResourceKeys,omitempty"`
    
}

