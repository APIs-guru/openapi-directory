package shared

import (
	"time"
)

type PolicyComplianceDetail struct {
	EvaluationLimitExceeded *bool                `json:"EvaluationLimitExceeded"`
	ExpiredAt               *time.Time           `json:"ExpiredAt"`
	IssueInfoMap            map[string]string    `json:"IssueInfoMap"`
	MemberAccount           *string              `json:"MemberAccount"`
	PolicyID                *string              `json:"PolicyId"`
	PolicyOwner             *string              `json:"PolicyOwner"`
	Violators               []ComplianceViolator `json:"Violators"`
}
