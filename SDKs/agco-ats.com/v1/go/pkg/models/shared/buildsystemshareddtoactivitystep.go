package shared

// BuildSystemSharedDtoActivityStep
// A DTO for an IActivityStep
type BuildSystemSharedDtoActivityStep struct {
	ActivityID        *int32                                 `json:"ActivityID,omitempty"`
	ActivityStepID    *int32                                 `json:"ActivityStepID,omitempty"`
	ImplementationID  *string                                `json:"ImplementationID,omitempty"`
	ParameterMappings []BuildSystemSharedDtoParameterMapping `json:"ParameterMappings,omitempty"`
	RunOrder          *int32                                 `json:"RunOrder,omitempty"`
	StepID            *int32                                 `json:"StepID,omitempty"`
	StepName          *string                                `json:"StepName,omitempty"`
	UseConfig         *string                                `json:"UseConfig,omitempty"`
}
