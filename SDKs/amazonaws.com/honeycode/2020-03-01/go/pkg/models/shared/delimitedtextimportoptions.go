package shared



type DelimitedTextImportOptions struct {
    DataCharacterEncoding *ImportDataCharacterEncodingEnum `json:"dataCharacterEncoding,omitempty"`
    Delimiter string `json:"delimiter"`
    HasHeaderRow *bool `json:"hasHeaderRow,omitempty"`
    IgnoreEmptyRows *bool `json:"ignoreEmptyRows,omitempty"`
    
}

