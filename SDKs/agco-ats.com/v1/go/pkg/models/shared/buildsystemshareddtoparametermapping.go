package shared

type BuildSystemSharedDtoParameterMappingSourceTypeEnum string

const (
	BuildSystemSharedDtoParameterMappingSourceTypeEnumConstant BuildSystemSharedDtoParameterMappingSourceTypeEnum = "Constant"
	BuildSystemSharedDtoParameterMappingSourceTypeEnumVariable BuildSystemSharedDtoParameterMappingSourceTypeEnum = "Variable"
)

type BuildSystemSharedDtoParameterMapping struct {
	Name       *string                                             `json:"Name,omitempty"`
	Source     *string                                             `json:"Source,omitempty"`
	SourceType *BuildSystemSharedDtoParameterMappingSourceTypeEnum `json:"SourceType,omitempty"`
}
