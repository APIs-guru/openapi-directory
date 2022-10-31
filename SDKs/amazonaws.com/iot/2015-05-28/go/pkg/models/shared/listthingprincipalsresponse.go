package shared



type ListThingPrincipalsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Principals []string `json:"principals,omitempty"`
    
}

