package shared



type ListUploadsResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    Uploads []Upload `json:"uploads,omitempty"`
    
}

