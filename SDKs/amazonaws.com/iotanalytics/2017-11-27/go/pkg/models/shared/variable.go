package shared

type Variable struct {
	DatasetContentVersionValue *DatasetContentVersionValue `json:"datasetContentVersionValue"`
	DoubleValue                *float64                    `json:"doubleValue"`
	Name                       string                      `json:"name"`
	OutputFileURIValue         *OutputFileURIValue         `json:"outputFileUriValue"`
	StringValue                *string                     `json:"stringValue"`
}
