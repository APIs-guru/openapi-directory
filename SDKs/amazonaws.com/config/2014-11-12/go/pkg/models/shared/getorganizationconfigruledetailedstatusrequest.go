package shared

type GetOrganizationConfigRuleDetailedStatusRequest struct {
	Filters                    *StatusDetailFilters `json:"Filters,omitempty"`
	Limit                      *int64               `json:"Limit,omitempty"`
	NextToken                  *string              `json:"NextToken,omitempty"`
	OrganizationConfigRuleName string               `json:"OrganizationConfigRuleName"`
}
