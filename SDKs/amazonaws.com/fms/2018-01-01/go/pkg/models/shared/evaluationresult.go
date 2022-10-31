package shared



type EvaluationResult struct {
    ComplianceStatus *PolicyComplianceStatusTypeEnum `json:"ComplianceStatus,omitempty"`
    EvaluationLimitExceeded *bool `json:"EvaluationLimitExceeded,omitempty"`
    ViolatorCount *int64 `json:"ViolatorCount,omitempty"`
    
}

