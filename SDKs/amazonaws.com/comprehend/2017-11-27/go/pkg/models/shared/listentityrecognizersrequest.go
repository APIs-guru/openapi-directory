package shared



type ListEntityRecognizersRequest struct {
    Filter *EntityRecognizerFilter `json:"Filter,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

