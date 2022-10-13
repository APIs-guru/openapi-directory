package shared

import (
	"time"
)

type PolicyComplianceStatus struct {
	EvaluationResults []EvaluationResult `json:"EvaluationResults"`
	IssueInfoMap      map[string]string  `json:"IssueInfoMap"`
	LastUpdated       *time.Time         `json:"LastUpdated"`
	MemberAccount     *string            `json:"MemberAccount"`
	PolicyID          *string            `json:"PolicyId"`
	PolicyName        *string            `json:"PolicyName"`
	PolicyOwner       *string            `json:"PolicyOwner"`
}
