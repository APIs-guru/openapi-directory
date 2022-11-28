package shared

// Variable
// An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.
type Variable struct {
	DatasetContentVersionValue *DatasetContentVersionValue `json:"datasetContentVersionValue,omitempty"`
	DoubleValue                *float64                    `json:"doubleValue,omitempty"`
	Name                       string                      `json:"name"`
	OutputFileURIValue         *OutputFileURIValue         `json:"outputFileUriValue,omitempty"`
	StringValue                *string                     `json:"stringValue,omitempty"`
}
