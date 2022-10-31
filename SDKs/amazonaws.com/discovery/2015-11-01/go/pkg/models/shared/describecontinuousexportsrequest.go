package shared



type DescribeContinuousExportsRequest struct {
    ExportIds []string `json:"exportIds,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

