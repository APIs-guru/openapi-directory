package shared



type ListBlueprintsResponse struct {
    Blueprints []string `json:"Blueprints,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

