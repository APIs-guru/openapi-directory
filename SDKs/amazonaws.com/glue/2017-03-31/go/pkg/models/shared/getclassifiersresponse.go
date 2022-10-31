package shared



type GetClassifiersResponse struct {
    Classifiers []Classifier `json:"Classifiers,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

