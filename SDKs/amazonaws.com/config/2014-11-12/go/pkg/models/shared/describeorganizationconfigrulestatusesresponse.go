package shared

type DescribeOrganizationConfigRuleStatusesResponse struct {
	NextToken                      *string                        `json:"NextToken,omitempty"`
	OrganizationConfigRuleStatuses []OrganizationConfigRuleStatus `json:"OrganizationConfigRuleStatuses,omitempty"`
}
