package shared

import (
	"time"
)

type OrganizationConfigRule struct {
	ExcludedAccounts                []string                         `json:"ExcludedAccounts"`
	LastUpdateTime                  *time.Time                       `json:"LastUpdateTime"`
	OrganizationConfigRuleArn       string                           `json:"OrganizationConfigRuleArn"`
	OrganizationConfigRuleName      string                           `json:"OrganizationConfigRuleName"`
	OrganizationCustomRuleMetadata  *OrganizationCustomRuleMetadata  `json:"OrganizationCustomRuleMetadata"`
	OrganizationManagedRuleMetadata *OrganizationManagedRuleMetadata `json:"OrganizationManagedRuleMetadata"`
}
