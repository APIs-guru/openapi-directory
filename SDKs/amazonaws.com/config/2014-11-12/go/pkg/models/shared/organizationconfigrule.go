package shared

import (
"time")

type OrganizationConfigRule struct {
    ExcludedAccounts []string `json:"ExcludedAccounts,omitempty"`
    LastUpdateTime *time.Time `json:"LastUpdateTime,omitempty"`
    OrganizationConfigRuleArn string `json:"OrganizationConfigRuleArn"`
    OrganizationConfigRuleName string `json:"OrganizationConfigRuleName"`
    OrganizationCustomRuleMetadata *OrganizationCustomRuleMetadata `json:"OrganizationCustomRuleMetadata,omitempty"`
    OrganizationManagedRuleMetadata *OrganizationManagedRuleMetadata `json:"OrganizationManagedRuleMetadata,omitempty"`
    
}

