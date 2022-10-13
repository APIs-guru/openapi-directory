package shared

type BuildSystemSharedDtoParameterDirectionEnum string

const (
	BuildSystemSharedDtoParameterDirectionEnumInput  BuildSystemSharedDtoParameterDirectionEnum = "Input"
	BuildSystemSharedDtoParameterDirectionEnumOutput BuildSystemSharedDtoParameterDirectionEnum = "Output"
)

type BuildSystemSharedDtoParameterTypeEnum string

const (
	BuildSystemSharedDtoParameterTypeEnumString           BuildSystemSharedDtoParameterTypeEnum = "String"
	BuildSystemSharedDtoParameterTypeEnumBoolean          BuildSystemSharedDtoParameterTypeEnum = "Boolean"
	BuildSystemSharedDtoParameterTypeEnumInteger          BuildSystemSharedDtoParameterTypeEnum = "Integer"
	BuildSystemSharedDtoParameterTypeEnumFloat            BuildSystemSharedDtoParameterTypeEnum = "Float"
	BuildSystemSharedDtoParameterTypeEnumStringDictionary BuildSystemSharedDtoParameterTypeEnum = "StringDictionary"
)

type BuildSystemSharedDtoParameter struct {
	Direction *BuildSystemSharedDtoParameterDirectionEnum `json:"Direction"`
	Name      *string                                     `json:"Name"`
	Type      *BuildSystemSharedDtoParameterTypeEnum      `json:"Type"`
}
