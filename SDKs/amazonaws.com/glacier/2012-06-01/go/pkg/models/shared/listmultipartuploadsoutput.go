package shared



type ListMultipartUploadsOutput struct {
    Marker *string `json:"Marker,omitempty"`
    UploadsList []UploadListElement `json:"UploadsList,omitempty"`
    
}

