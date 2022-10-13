package shared

type CreateClassifierRequest struct {
	CsvClassifier  *CreateCsvClassifierRequest  `json:"CsvClassifier"`
	GrokClassifier *CreateGrokClassifierRequest `json:"GrokClassifier"`
	JSONClassifier *CreateJSONClassifierRequest `json:"JsonClassifier"`
	XMLClassifier  *CreateXMLClassifierRequest  `json:"XMLClassifier"`
}
