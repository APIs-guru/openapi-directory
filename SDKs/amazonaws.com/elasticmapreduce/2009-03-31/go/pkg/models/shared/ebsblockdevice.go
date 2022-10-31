package shared



type EbsBlockDevice struct {
    Device *string `json:"Device,omitempty"`
    VolumeSpecification *VolumeSpecification `json:"VolumeSpecification,omitempty"`
    
}

