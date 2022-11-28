package shared

import (
	"time"
)

// PolicyComplianceStatus
// Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.
type PolicyComplianceStatus struct {
	EvaluationResults []EvaluationResult `json:"EvaluationResults,omitempty"`
	IssueInfoMap      map[string]string  `json:"IssueInfoMap,omitempty"`
	LastUpdated       *time.Time         `json:"LastUpdated,omitempty"`
	MemberAccount     *string            `json:"MemberAccount,omitempty"`
	PolicyID          *string            `json:"PolicyId,omitempty"`
	PolicyName        *string            `json:"PolicyName,omitempty"`
	PolicyOwner       *string            `json:"PolicyOwner,omitempty"`
}
