package shared

import (
"time")

type CsvClassifier struct {
    AllowSingleColumn *bool `json:"AllowSingleColumn,omitempty"`
    ContainsHeader *CsvHeaderOptionEnum `json:"ContainsHeader,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Delimiter *string `json:"Delimiter,omitempty"`
    DisableValueTrimming *bool `json:"DisableValueTrimming,omitempty"`
    Header []string `json:"Header,omitempty"`
    LastUpdated *time.Time `json:"LastUpdated,omitempty"`
    Name string `json:"Name"`
    QuoteSymbol *string `json:"QuoteSymbol,omitempty"`
    Version *int64 `json:"Version,omitempty"`
    
}

