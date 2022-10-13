package shared

type UpdateClassifierRequest struct {
	CsvClassifier  *UpdateCsvClassifierRequest  `json:"CsvClassifier"`
	GrokClassifier *UpdateGrokClassifierRequest `json:"GrokClassifier"`
	JSONClassifier *UpdateJSONClassifierRequest `json:"JsonClassifier"`
	XMLClassifier  *UpdateXMLClassifierRequest  `json:"XMLClassifier"`
}
