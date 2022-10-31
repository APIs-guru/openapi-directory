package shared




type BuildSystemSharedDtoParameterValueDirectionEnum string

const (
    BuildSystemSharedDtoParameterValueDirectionEnumInput BuildSystemSharedDtoParameterValueDirectionEnum = "Input"
BuildSystemSharedDtoParameterValueDirectionEnumOutput BuildSystemSharedDtoParameterValueDirectionEnum = "Output"
)


type BuildSystemSharedDtoParameterValue struct {
    Direction *BuildSystemSharedDtoParameterValueDirectionEnum `json:"Direction,omitempty"`
    Name *string `json:"Name,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

