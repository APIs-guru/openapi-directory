package shared



type PreviewAgentsRequest struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    PreviewAgentsArn string `json:"previewAgentsArn"`
    
}

