package shared

type AssessmentControlSet struct {
	Controls            []AssessmentControl   `json:"controls"`
	Delegations         []Delegation          `json:"delegations"`
	Description         *string               `json:"description"`
	ID                  *string               `json:"id"`
	ManualEvidenceCount *int64                `json:"manualEvidenceCount"`
	Roles               []Role                `json:"roles"`
	Status              *ControlSetStatusEnum `json:"status"`
	SystemEvidenceCount *int64                `json:"systemEvidenceCount"`
}
