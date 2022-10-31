package shared



type ListOfferingsResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    Offerings []Offering `json:"offerings,omitempty"`
    
}

