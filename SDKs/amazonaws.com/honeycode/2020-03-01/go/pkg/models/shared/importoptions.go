package shared

// ImportOptions
// An object that contains the options specified by the sumitter of the import request.
type ImportOptions struct {
	DelimitedTextOptions *DelimitedTextImportOptions `json:"delimitedTextOptions,omitempty"`
	DestinationOptions   *DestinationOptions         `json:"destinationOptions,omitempty"`
}
