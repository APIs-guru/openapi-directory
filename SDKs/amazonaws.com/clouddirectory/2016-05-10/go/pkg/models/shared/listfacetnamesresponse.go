package shared



type ListFacetNamesResponse struct {
    FacetNames []string `json:"FacetNames,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

