package shared



type BatchListAttachedIndices struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    TargetReference ObjectReference `json:"TargetReference"`
    
}

