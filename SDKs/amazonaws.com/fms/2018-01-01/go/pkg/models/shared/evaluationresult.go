package shared

// EvaluationResult
// Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy.
type EvaluationResult struct {
	ComplianceStatus        *PolicyComplianceStatusTypeEnum `json:"ComplianceStatus,omitempty"`
	EvaluationLimitExceeded *bool                           `json:"EvaluationLimitExceeded,omitempty"`
	ViolatorCount           *int64                          `json:"ViolatorCount,omitempty"`
}
