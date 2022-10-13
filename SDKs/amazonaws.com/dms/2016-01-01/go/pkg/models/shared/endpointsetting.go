package shared

type EndpointSetting struct {
	Applicability *string                       `json:"Applicability"`
	DefaultValue  *string                       `json:"DefaultValue"`
	EnumValues    []string                      `json:"EnumValues"`
	IntValueMax   *int64                        `json:"IntValueMax"`
	IntValueMin   *int64                        `json:"IntValueMin"`
	Name          *string                       `json:"Name"`
	Sensitive     *bool                         `json:"Sensitive"`
	Type          *EndpointSettingTypeValueEnum `json:"Type"`
	Units         *string                       `json:"Units"`
}
