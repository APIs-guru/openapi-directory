package shared

type GetOrganizationConfigRuleDetailedStatusResponse struct {
	NextToken                            *string               `json:"NextToken"`
	OrganizationConfigRuleDetailedStatus []MemberAccountStatus `json:"OrganizationConfigRuleDetailedStatus"`
}
