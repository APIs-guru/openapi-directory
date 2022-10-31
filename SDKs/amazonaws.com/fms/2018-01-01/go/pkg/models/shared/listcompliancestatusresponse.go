package shared



type ListComplianceStatusResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    PolicyComplianceStatusList []PolicyComplianceStatus `json:"PolicyComplianceStatusList,omitempty"`
    
}

