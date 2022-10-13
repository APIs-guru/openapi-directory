package shared

type PutOrganizationConfigRuleRequest struct {
	ExcludedAccounts                []string                         `json:"ExcludedAccounts"`
	OrganizationConfigRuleName      string                           `json:"OrganizationConfigRuleName"`
	OrganizationCustomRuleMetadata  *OrganizationCustomRuleMetadata  `json:"OrganizationCustomRuleMetadata"`
	OrganizationManagedRuleMetadata *OrganizationManagedRuleMetadata `json:"OrganizationManagedRuleMetadata"`
}
