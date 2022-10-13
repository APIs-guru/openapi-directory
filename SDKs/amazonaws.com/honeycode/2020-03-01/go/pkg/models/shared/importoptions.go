package shared

type ImportOptions struct {
	DelimitedTextOptions *DelimitedTextImportOptions `json:"delimitedTextOptions"`
	DestinationOptions   *DestinationOptions         `json:"destinationOptions"`
}
