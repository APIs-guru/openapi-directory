package shared



type BatchListObjectParents struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ObjectReference ObjectReference `json:"ObjectReference"`
    
}

