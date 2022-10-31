package shared



type DescribeConformancePackComplianceResponse struct {
    ConformancePackName string `json:"ConformancePackName"`
    ConformancePackRuleComplianceList []ConformancePackRuleCompliance `json:"ConformancePackRuleComplianceList"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

