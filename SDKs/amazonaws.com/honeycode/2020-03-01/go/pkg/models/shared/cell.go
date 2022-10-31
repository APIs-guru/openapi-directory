package shared



type Cell struct {
    Format *FormatEnum `json:"format,omitempty"`
    FormattedValue *string `json:"formattedValue,omitempty"`
    Formula *string `json:"formula,omitempty"`
    RawValue *string `json:"rawValue,omitempty"`
    
}

