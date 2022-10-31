package shared



type ListTrailsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Trails []TrailInfo `json:"Trails,omitempty"`
    
}

