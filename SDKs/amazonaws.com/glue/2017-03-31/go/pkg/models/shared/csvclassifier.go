package shared

import (
	"time"
)

type CsvClassifier struct {
	AllowSingleColumn    *bool                `json:"AllowSingleColumn"`
	ContainsHeader       *CsvHeaderOptionEnum `json:"ContainsHeader"`
	CreationTime         *time.Time           `json:"CreationTime"`
	Delimiter            *string              `json:"Delimiter"`
	DisableValueTrimming *bool                `json:"DisableValueTrimming"`
	Header               []string             `json:"Header"`
	LastUpdated          *time.Time           `json:"LastUpdated"`
	Name                 string               `json:"Name"`
	QuoteSymbol          *string              `json:"QuoteSymbol"`
	Version              *int64               `json:"Version"`
}
