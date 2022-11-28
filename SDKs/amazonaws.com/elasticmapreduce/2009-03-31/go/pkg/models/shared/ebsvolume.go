package shared

// EbsVolume
// EBS block device that's attached to an EC2 instance.
type EbsVolume struct {
	Device   *string `json:"Device,omitempty"`
	VolumeID *string `json:"VolumeId,omitempty"`
}
