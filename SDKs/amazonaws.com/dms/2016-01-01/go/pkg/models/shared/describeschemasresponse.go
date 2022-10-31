package shared



type DescribeSchemasResponse struct {
    Marker *string `json:"Marker,omitempty"`
    Schemas []string `json:"Schemas,omitempty"`
    
}

