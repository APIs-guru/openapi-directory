package shared

type BuildSystemSharedDtoParameterValueDirectionEnum string

const (
	BuildSystemSharedDtoParameterValueDirectionEnumInput  BuildSystemSharedDtoParameterValueDirectionEnum = "Input"
	BuildSystemSharedDtoParameterValueDirectionEnumOutput BuildSystemSharedDtoParameterValueDirectionEnum = "Output"
)

// BuildSystemSharedDtoParameterValue
// A DTO for an IParameterValue
type BuildSystemSharedDtoParameterValue struct {
	Direction *BuildSystemSharedDtoParameterValueDirectionEnum `json:"Direction,omitempty"`
	Name      *string                                          `json:"Name,omitempty"`
	Value     *string                                          `json:"Value,omitempty"`
}
