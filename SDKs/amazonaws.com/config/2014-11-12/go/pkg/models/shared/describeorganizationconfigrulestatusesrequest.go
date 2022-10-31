package shared



type DescribeOrganizationConfigRuleStatusesRequest struct {
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    OrganizationConfigRuleNames []string `json:"OrganizationConfigRuleNames,omitempty"`
    
}

