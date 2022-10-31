package shared



type ImportOptions struct {
    DelimitedTextOptions *DelimitedTextImportOptions `json:"delimitedTextOptions,omitempty"`
    DestinationOptions *DestinationOptions `json:"destinationOptions,omitempty"`
    
}

