package shared



type OpenXJSONSerDe struct {
    CaseInsensitive *bool `json:"CaseInsensitive,omitempty"`
    ColumnToJSONKeyMappings map[string]string `json:"ColumnToJsonKeyMappings,omitempty"`
    ConvertDotsInJSONKeysToUnderscores *bool `json:"ConvertDotsInJsonKeysToUnderscores,omitempty"`
    
}

