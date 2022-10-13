package shared

import (
	"time"
)

type ApprovalRuleTemplate struct {
	ApprovalRuleTemplateContent     *string    `json:"approvalRuleTemplateContent"`
	ApprovalRuleTemplateDescription *string    `json:"approvalRuleTemplateDescription"`
	ApprovalRuleTemplateID          *string    `json:"approvalRuleTemplateId"`
	ApprovalRuleTemplateName        *string    `json:"approvalRuleTemplateName"`
	CreationDate                    *time.Time `json:"creationDate"`
	LastModifiedDate                *time.Time `json:"lastModifiedDate"`
	LastModifiedUser                *string    `json:"lastModifiedUser"`
	RuleContentSha256               *string    `json:"ruleContentSha256"`
}
