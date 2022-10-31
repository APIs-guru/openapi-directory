package shared



type GetOrganizationConfigRuleDetailedStatusResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    OrganizationConfigRuleDetailedStatus []MemberAccountStatus `json:"OrganizationConfigRuleDetailedStatus,omitempty"`
    
}

