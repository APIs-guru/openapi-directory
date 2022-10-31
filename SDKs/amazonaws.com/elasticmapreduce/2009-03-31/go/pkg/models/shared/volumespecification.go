package shared



type VolumeSpecification struct {
    Iops *int64 `json:"Iops,omitempty"`
    SizeInGb int64 `json:"SizeInGB"`
    VolumeType string `json:"VolumeType"`
    
}

