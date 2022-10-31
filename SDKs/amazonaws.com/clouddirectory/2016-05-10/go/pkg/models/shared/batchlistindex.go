package shared



type BatchListIndex struct {
    IndexReference ObjectReference `json:"IndexReference"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    RangesOnIndexedValues []ObjectAttributeRange `json:"RangesOnIndexedValues,omitempty"`
    
}

