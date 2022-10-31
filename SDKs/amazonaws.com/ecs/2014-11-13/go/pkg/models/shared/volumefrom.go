package shared



type VolumeFrom struct {
    ReadOnly *bool `json:"readOnly,omitempty"`
    SourceContainer *string `json:"sourceContainer,omitempty"`
    
}

