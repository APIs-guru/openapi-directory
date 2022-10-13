package shared

type EvaluationResult struct {
	ComplianceStatus        *PolicyComplianceStatusTypeEnum `json:"ComplianceStatus"`
	EvaluationLimitExceeded *bool                           `json:"EvaluationLimitExceeded"`
	ViolatorCount           *int64                          `json:"ViolatorCount"`
}
