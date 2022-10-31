package shared

type CreateCsvClassifierRequest struct {
	AllowSingleColumn    *bool                `json:"AllowSingleColumn,omitempty"`
	ContainsHeader       *CsvHeaderOptionEnum `json:"ContainsHeader,omitempty"`
	Delimiter            *string              `json:"Delimiter,omitempty"`
	DisableValueTrimming *bool                `json:"DisableValueTrimming,omitempty"`
	Header               []string             `json:"Header,omitempty"`
	Name                 string               `json:"Name"`
	QuoteSymbol          *string              `json:"QuoteSymbol,omitempty"`
}
