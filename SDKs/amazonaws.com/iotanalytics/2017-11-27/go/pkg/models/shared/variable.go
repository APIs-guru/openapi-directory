package shared



type Variable struct {
    DatasetContentVersionValue *DatasetContentVersionValue `json:"datasetContentVersionValue,omitempty"`
    DoubleValue *float64 `json:"doubleValue,omitempty"`
    Name string `json:"name"`
    OutputFileURIValue *OutputFileURIValue `json:"outputFileUriValue,omitempty"`
    StringValue *string `json:"stringValue,omitempty"`
    
}

