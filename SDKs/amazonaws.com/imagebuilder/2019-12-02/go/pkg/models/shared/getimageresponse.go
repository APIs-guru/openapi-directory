package shared



type GetImageResponse struct {
    Image *Image `json:"image,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

