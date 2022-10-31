package shared



type EventRiskType struct {
    CompromisedCredentialsDetected *bool `json:"CompromisedCredentialsDetected,omitempty"`
    RiskDecision *RiskDecisionTypeEnum `json:"RiskDecision,omitempty"`
    RiskLevel *RiskLevelTypeEnum `json:"RiskLevel,omitempty"`
    
}

