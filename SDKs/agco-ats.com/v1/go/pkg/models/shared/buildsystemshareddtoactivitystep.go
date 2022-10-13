package shared

type BuildSystemSharedDtoActivityStep struct {
	ActivityID        *int32                                 `json:"ActivityID"`
	ActivityStepID    *int32                                 `json:"ActivityStepID"`
	ImplementationID  *string                                `json:"ImplementationID"`
	ParameterMappings []BuildSystemSharedDtoParameterMapping `json:"ParameterMappings"`
	RunOrder          *int32                                 `json:"RunOrder"`
	StepID            *int32                                 `json:"StepID"`
	StepName          *string                                `json:"StepName"`
	UseConfig         *string                                `json:"UseConfig"`
}
