package shared

// EbsBlockDevice
// Configuration of requested EBS block device associated with the instance group.
type EbsBlockDevice struct {
	Device              *string              `json:"Device,omitempty"`
	VolumeSpecification *VolumeSpecification `json:"VolumeSpecification,omitempty"`
}
