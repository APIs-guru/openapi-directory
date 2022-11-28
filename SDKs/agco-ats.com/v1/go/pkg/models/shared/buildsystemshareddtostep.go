package shared

// BuildSystemSharedDtoStep
// Step
type BuildSystemSharedDtoStep struct {
	ConfigRequired   bool                            `json:"ConfigRequired"`
	Deleted          *bool                           `json:"Deleted,omitempty"`
	Description      *string                         `json:"Description,omitempty"`
	ImplementationID string                          `json:"ImplementationID"`
	Name             string                          `json:"Name"`
	Parameters       []BuildSystemSharedDtoParameter `json:"Parameters,omitempty"`
	StepID           *int32                          `json:"StepID,omitempty"`
}

// BuildSystemSharedDtoStepInput
// Step
type BuildSystemSharedDtoStepInput struct {
	ConfigRequired   bool    `json:"ConfigRequired" form:"name=ConfigRequired"`
	Deleted          *bool   `json:"Deleted,omitempty" form:"name=Deleted"`
	Description      *string `json:"Description,omitempty" form:"name=Description"`
	ImplementationID string  `json:"ImplementationID" form:"name=ImplementationID"`
	Name             string  `json:"Name" form:"name=Name"`
	StepID           *int32  `json:"StepID,omitempty" form:"name=StepID"`
}
