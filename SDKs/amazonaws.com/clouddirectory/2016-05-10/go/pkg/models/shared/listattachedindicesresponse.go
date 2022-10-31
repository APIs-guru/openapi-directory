package shared



type ListAttachedIndicesResponse struct {
    IndexAttachments []IndexAttachment `json:"IndexAttachments,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

