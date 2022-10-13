package shared

type EventRiskType struct {
	CompromisedCredentialsDetected *bool                 `json:"CompromisedCredentialsDetected"`
	RiskDecision                   *RiskDecisionTypeEnum `json:"RiskDecision"`
	RiskLevel                      *RiskLevelTypeEnum    `json:"RiskLevel"`
}
