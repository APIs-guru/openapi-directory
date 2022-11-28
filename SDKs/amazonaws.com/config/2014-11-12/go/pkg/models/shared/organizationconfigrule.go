package shared

import (
	"time"
)

// OrganizationConfigRule
// An organization config rule that has information about config rules that Config creates in member accounts.
type OrganizationConfigRule struct {
	ExcludedAccounts                []string                         `json:"ExcludedAccounts,omitempty"`
	LastUpdateTime                  *time.Time                       `json:"LastUpdateTime,omitempty"`
	OrganizationConfigRuleArn       string                           `json:"OrganizationConfigRuleArn"`
	OrganizationConfigRuleName      string                           `json:"OrganizationConfigRuleName"`
	OrganizationCustomRuleMetadata  *OrganizationCustomRuleMetadata  `json:"OrganizationCustomRuleMetadata,omitempty"`
	OrganizationManagedRuleMetadata *OrganizationManagedRuleMetadata `json:"OrganizationManagedRuleMetadata,omitempty"`
}
