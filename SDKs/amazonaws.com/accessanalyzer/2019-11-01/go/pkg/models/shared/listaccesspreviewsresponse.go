package shared



type ListAccessPreviewsResponse struct {
    AccessPreviews []AccessPreviewSummary `json:"accessPreviews"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

