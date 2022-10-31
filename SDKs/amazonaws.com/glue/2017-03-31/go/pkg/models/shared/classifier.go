package shared



type Classifier struct {
    CsvClassifier *CsvClassifier `json:"CsvClassifier,omitempty"`
    GrokClassifier *GrokClassifier `json:"GrokClassifier,omitempty"`
    JSONClassifier *JSONClassifier `json:"JsonClassifier,omitempty"`
    XMLClassifier *XMLClassifier `json:"XMLClassifier,omitempty"`
    
}

