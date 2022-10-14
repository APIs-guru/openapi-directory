package shared

type BuildSystemSharedDtoStepConfiguration struct {
	Configurations       []string `json:"Configurations,omitempty"`
	StepImplementationID string   `json:"StepImplementationID"`
}
