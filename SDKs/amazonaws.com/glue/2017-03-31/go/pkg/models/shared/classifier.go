package shared

type Classifier struct {
	CsvClassifier  *CsvClassifier  `json:"CsvClassifier"`
	GrokClassifier *GrokClassifier `json:"GrokClassifier"`
	JSONClassifier *JSONClassifier `json:"JsonClassifier"`
	XMLClassifier  *XMLClassifier  `json:"XMLClassifier"`
}
