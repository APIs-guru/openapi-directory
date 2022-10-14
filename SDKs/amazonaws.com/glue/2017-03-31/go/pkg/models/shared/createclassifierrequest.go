package shared

type CreateClassifierRequest struct {
	CsvClassifier  *CreateCsvClassifierRequest  `json:"CsvClassifier,omitempty"`
	GrokClassifier *CreateGrokClassifierRequest `json:"GrokClassifier,omitempty"`
	JSONClassifier *CreateJSONClassifierRequest `json:"JsonClassifier,omitempty"`
	XMLClassifier  *CreateXMLClassifierRequest  `json:"XMLClassifier,omitempty"`
}
