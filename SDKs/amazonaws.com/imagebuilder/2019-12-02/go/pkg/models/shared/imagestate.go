package shared



type ImageState struct {
    Reason *string `json:"reason,omitempty"`
    Status *ImageStatusEnum `json:"status,omitempty"`
    
}

