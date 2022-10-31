package shared



type EbsInstanceBlockDeviceSpecification struct {
    DeleteOnTermination *bool `json:"deleteOnTermination,omitempty"`
    Encrypted *bool `json:"encrypted,omitempty"`
    Iops *int64 `json:"iops,omitempty"`
    KmsKeyID *string `json:"kmsKeyId,omitempty"`
    SnapshotID *string `json:"snapshotId,omitempty"`
    VolumeSize *int64 `json:"volumeSize,omitempty"`
    VolumeType *EbsVolumeTypeEnum `json:"volumeType,omitempty"`
    
}

