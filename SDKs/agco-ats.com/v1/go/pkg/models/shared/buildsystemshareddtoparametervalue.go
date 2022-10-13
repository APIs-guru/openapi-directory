package shared

type BuildSystemSharedDtoParameterValueDirectionEnum string

const (
	BuildSystemSharedDtoParameterValueDirectionEnumInput  BuildSystemSharedDtoParameterValueDirectionEnum = "Input"
	BuildSystemSharedDtoParameterValueDirectionEnumOutput BuildSystemSharedDtoParameterValueDirectionEnum = "Output"
)

type BuildSystemSharedDtoParameterValue struct {
	Direction *BuildSystemSharedDtoParameterValueDirectionEnum `json:"Direction"`
	Name      *string                                          `json:"Name"`
	Value     *string                                          `json:"Value"`
}
