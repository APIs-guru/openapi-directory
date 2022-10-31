package shared



type ListDocumentClassificationJobsRequest struct {
    Filter *DocumentClassificationJobFilter `json:"Filter,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

