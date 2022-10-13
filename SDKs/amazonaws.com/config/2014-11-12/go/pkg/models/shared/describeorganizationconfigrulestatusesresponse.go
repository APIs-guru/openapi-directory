package shared

type DescribeOrganizationConfigRuleStatusesResponse struct {
	NextToken                      *string                        `json:"NextToken"`
	OrganizationConfigRuleStatuses []OrganizationConfigRuleStatus `json:"OrganizationConfigRuleStatuses"`
}
