package shared



type ImageScanStatus struct {
    Description *string `json:"description,omitempty"`
    Status *ScanStatusEnum `json:"status,omitempty"`
    
}

