package shared

type DelimitedTextImportOptions struct {
	DataCharacterEncoding *ImportDataCharacterEncodingEnum `json:"dataCharacterEncoding"`
	Delimiter             string                           `json:"delimiter"`
	HasHeaderRow          *bool                            `json:"hasHeaderRow"`
	IgnoreEmptyRows       *bool                            `json:"ignoreEmptyRows"`
}
