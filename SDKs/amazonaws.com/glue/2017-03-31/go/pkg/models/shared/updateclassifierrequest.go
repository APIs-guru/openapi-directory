package shared



type UpdateClassifierRequest struct {
    CsvClassifier *UpdateCsvClassifierRequest `json:"CsvClassifier,omitempty"`
    GrokClassifier *UpdateGrokClassifierRequest `json:"GrokClassifier,omitempty"`
    JSONClassifier *UpdateJSONClassifierRequest `json:"JsonClassifier,omitempty"`
    XMLClassifier *UpdateXMLClassifierRequest `json:"XMLClassifier,omitempty"`
    
}

