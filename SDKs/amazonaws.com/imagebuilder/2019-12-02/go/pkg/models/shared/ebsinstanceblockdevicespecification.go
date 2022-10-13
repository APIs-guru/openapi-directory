package shared

type EbsInstanceBlockDeviceSpecification struct {
	DeleteOnTermination *bool              `json:"deleteOnTermination"`
	Encrypted           *bool              `json:"encrypted"`
	Iops                *int64             `json:"iops"`
	KmsKeyID            *string            `json:"kmsKeyId"`
	SnapshotID          *string            `json:"snapshotId"`
	VolumeSize          *int64             `json:"volumeSize"`
	VolumeType          *EbsVolumeTypeEnum `json:"volumeType"`
}
