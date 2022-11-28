package shared

import (
	"time"
)

// OrganizationConfigRuleStatus
// Returns the status for an organization config rule in an organization.
type OrganizationConfigRuleStatus struct {
	ErrorCode                  *string                    `json:"ErrorCode,omitempty"`
	ErrorMessage               *string                    `json:"ErrorMessage,omitempty"`
	LastUpdateTime             *time.Time                 `json:"LastUpdateTime,omitempty"`
	OrganizationConfigRuleName string                     `json:"OrganizationConfigRuleName"`
	OrganizationRuleStatus     OrganizationRuleStatusEnum `json:"OrganizationRuleStatus"`
}
