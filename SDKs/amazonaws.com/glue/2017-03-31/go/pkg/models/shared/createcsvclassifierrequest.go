package shared

type CreateCsvClassifierRequest struct {
	AllowSingleColumn    *bool                `json:"AllowSingleColumn"`
	ContainsHeader       *CsvHeaderOptionEnum `json:"ContainsHeader"`
	Delimiter            *string              `json:"Delimiter"`
	DisableValueTrimming *bool                `json:"DisableValueTrimming"`
	Header               []string             `json:"Header"`
	Name                 string               `json:"Name"`
	QuoteSymbol          *string              `json:"QuoteSymbol"`
}
