package shared



type ListUpdatesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    UpdateIds []string `json:"updateIds,omitempty"`
    
}

