package shared



type ListDocumentClassifiersRequest struct {
    Filter *DocumentClassifierFilter `json:"Filter,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

