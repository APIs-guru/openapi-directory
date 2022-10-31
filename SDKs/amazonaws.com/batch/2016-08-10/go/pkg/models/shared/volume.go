package shared



type Volume struct {
    EfsVolumeConfiguration *EfsVolumeConfiguration `json:"efsVolumeConfiguration,omitempty"`
    Host *Host `json:"host,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

