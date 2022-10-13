package shared

import (
	"time"
)

type ApprovalRule struct {
	ApprovalRuleContent        *string                     `json:"approvalRuleContent"`
	ApprovalRuleID             *string                     `json:"approvalRuleId"`
	ApprovalRuleName           *string                     `json:"approvalRuleName"`
	CreationDate               *time.Time                  `json:"creationDate"`
	LastModifiedDate           *time.Time                  `json:"lastModifiedDate"`
	LastModifiedUser           *string                     `json:"lastModifiedUser"`
	OriginApprovalRuleTemplate *OriginApprovalRuleTemplate `json:"originApprovalRuleTemplate"`
	RuleContentSha256          *string                     `json:"ruleContentSha256"`
}
