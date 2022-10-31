package shared



type BatchListPolicyAttachments struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    PolicyReference ObjectReference `json:"PolicyReference"`
    
}

