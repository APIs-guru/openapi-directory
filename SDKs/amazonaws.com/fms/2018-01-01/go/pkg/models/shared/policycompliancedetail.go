package shared

import (
	"time"
)

// PolicyComplianceDetail
// Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.
type PolicyComplianceDetail struct {
	EvaluationLimitExceeded *bool                `json:"EvaluationLimitExceeded,omitempty"`
	ExpiredAt               *time.Time           `json:"ExpiredAt,omitempty"`
	IssueInfoMap            map[string]string    `json:"IssueInfoMap,omitempty"`
	MemberAccount           *string              `json:"MemberAccount,omitempty"`
	PolicyID                *string              `json:"PolicyId,omitempty"`
	PolicyOwner             *string              `json:"PolicyOwner,omitempty"`
	Violators               []ComplianceViolator `json:"Violators,omitempty"`
}
