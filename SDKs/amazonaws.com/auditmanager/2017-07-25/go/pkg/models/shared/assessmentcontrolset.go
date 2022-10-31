package shared

type AssessmentControlSet struct {
	Controls            []AssessmentControl   `json:"controls,omitempty"`
	Delegations         []Delegation          `json:"delegations,omitempty"`
	Description         *string               `json:"description,omitempty"`
	ID                  *string               `json:"id,omitempty"`
	ManualEvidenceCount *int64                `json:"manualEvidenceCount,omitempty"`
	Roles               []Role                `json:"roles,omitempty"`
	Status              *ControlSetStatusEnum `json:"status,omitempty"`
	SystemEvidenceCount *int64                `json:"systemEvidenceCount,omitempty"`
}
