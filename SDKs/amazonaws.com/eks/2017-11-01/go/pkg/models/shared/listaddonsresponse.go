package shared



type ListAddonsResponse struct {
    Addons []string `json:"addons,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

