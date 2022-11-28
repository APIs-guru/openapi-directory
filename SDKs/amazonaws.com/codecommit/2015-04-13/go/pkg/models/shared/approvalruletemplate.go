package shared

import (
	"time"
)

// ApprovalRuleTemplate
// Returns information about an approval rule template.
type ApprovalRuleTemplate struct {
	ApprovalRuleTemplateContent     *string    `json:"approvalRuleTemplateContent,omitempty"`
	ApprovalRuleTemplateDescription *string    `json:"approvalRuleTemplateDescription,omitempty"`
	ApprovalRuleTemplateID          *string    `json:"approvalRuleTemplateId,omitempty"`
	ApprovalRuleTemplateName        *string    `json:"approvalRuleTemplateName,omitempty"`
	CreationDate                    *time.Time `json:"creationDate,omitempty"`
	LastModifiedDate                *time.Time `json:"lastModifiedDate,omitempty"`
	LastModifiedUser                *string    `json:"lastModifiedUser,omitempty"`
	RuleContentSha256               *string    `json:"ruleContentSha256,omitempty"`
}
