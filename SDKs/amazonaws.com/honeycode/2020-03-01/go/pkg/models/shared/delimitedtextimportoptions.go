package shared

// DelimitedTextImportOptions
//
//	An object that contains the options relating to parsing delimited text as part of an import request.
type DelimitedTextImportOptions struct {
	DataCharacterEncoding *ImportDataCharacterEncodingEnum `json:"dataCharacterEncoding,omitempty"`
	Delimiter             string                           `json:"delimiter"`
	HasHeaderRow          *bool                            `json:"hasHeaderRow,omitempty"`
	IgnoreEmptyRows       *bool                            `json:"ignoreEmptyRows,omitempty"`
}
