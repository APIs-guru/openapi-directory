package shared

import (
	"time"
)

type ApprovalRule struct {
	ApprovalRuleContent        *string                     `json:"approvalRuleContent,omitempty"`
	ApprovalRuleID             *string                     `json:"approvalRuleId,omitempty"`
	ApprovalRuleName           *string                     `json:"approvalRuleName,omitempty"`
	CreationDate               *time.Time                  `json:"creationDate,omitempty"`
	LastModifiedDate           *time.Time                  `json:"lastModifiedDate,omitempty"`
	LastModifiedUser           *string                     `json:"lastModifiedUser,omitempty"`
	OriginApprovalRuleTemplate *OriginApprovalRuleTemplate `json:"originApprovalRuleTemplate,omitempty"`
	RuleContentSha256          *string                     `json:"ruleContentSha256,omitempty"`
}
