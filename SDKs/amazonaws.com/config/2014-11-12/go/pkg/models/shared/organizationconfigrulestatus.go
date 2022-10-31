package shared

import (
"time")

type OrganizationConfigRuleStatus struct {
    ErrorCode *string `json:"ErrorCode,omitempty"`
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    LastUpdateTime *time.Time `json:"LastUpdateTime,omitempty"`
    OrganizationConfigRuleName string `json:"OrganizationConfigRuleName"`
    OrganizationRuleStatus OrganizationRuleStatusEnum `json:"OrganizationRuleStatus"`
    
}

