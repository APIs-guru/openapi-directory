package shared

type GetOrganizationConfigRuleDetailedStatusRequest struct {
	Filters                    *StatusDetailFilters `json:"Filters"`
	Limit                      *int64               `json:"Limit"`
	NextToken                  *string              `json:"NextToken"`
	OrganizationConfigRuleName string               `json:"OrganizationConfigRuleName"`
}
