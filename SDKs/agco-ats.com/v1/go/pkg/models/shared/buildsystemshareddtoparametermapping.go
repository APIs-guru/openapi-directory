package shared

type BuildSystemSharedDtoParameterMappingSourceTypeEnum string

const (
	BuildSystemSharedDtoParameterMappingSourceTypeEnumConstant BuildSystemSharedDtoParameterMappingSourceTypeEnum = "Constant"
	BuildSystemSharedDtoParameterMappingSourceTypeEnumVariable BuildSystemSharedDtoParameterMappingSourceTypeEnum = "Variable"
)

type BuildSystemSharedDtoParameterMapping struct {
	Name       *string                                             `json:"Name"`
	Source     *string                                             `json:"Source"`
	SourceType *BuildSystemSharedDtoParameterMappingSourceTypeEnum `json:"SourceType"`
}
