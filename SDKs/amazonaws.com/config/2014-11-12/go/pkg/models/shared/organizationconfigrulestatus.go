package shared

import (
	"time"
)

type OrganizationConfigRuleStatus struct {
	ErrorCode                  *string                    `json:"ErrorCode"`
	ErrorMessage               *string                    `json:"ErrorMessage"`
	LastUpdateTime             *time.Time                 `json:"LastUpdateTime"`
	OrganizationConfigRuleName string                     `json:"OrganizationConfigRuleName"`
	OrganizationRuleStatus     OrganizationRuleStatusEnum `json:"OrganizationRuleStatus"`
}
