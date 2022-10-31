package shared



type ListFacetAttributesResponse struct {
    Attributes []FacetAttribute `json:"Attributes,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

