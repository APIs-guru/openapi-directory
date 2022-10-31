package shared



type UpdateUploadRequest struct {
    Arn string `json:"arn"`
    ContentType *string `json:"contentType,omitempty"`
    EditContent *bool `json:"editContent,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

