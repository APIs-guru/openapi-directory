package shared



type DataItem struct {
    FormattedValue *string `json:"formattedValue,omitempty"`
    OverrideFormat *FormatEnum `json:"overrideFormat,omitempty"`
    RawValue *string `json:"rawValue,omitempty"`
    
}

