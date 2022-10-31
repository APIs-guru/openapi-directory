package shared



type EndpointSetting struct {
    Applicability *string `json:"Applicability,omitempty"`
    DefaultValue *string `json:"DefaultValue,omitempty"`
    EnumValues []string `json:"EnumValues,omitempty"`
    IntValueMax *int64 `json:"IntValueMax,omitempty"`
    IntValueMin *int64 `json:"IntValueMin,omitempty"`
    Name *string `json:"Name,omitempty"`
    Sensitive *bool `json:"Sensitive,omitempty"`
    Type *EndpointSettingTypeValueEnum `json:"Type,omitempty"`
    Units *string `json:"Units,omitempty"`
    
}

