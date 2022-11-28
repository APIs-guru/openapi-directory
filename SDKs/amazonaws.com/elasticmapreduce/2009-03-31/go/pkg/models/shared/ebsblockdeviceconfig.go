package shared

// EbsBlockDeviceConfig
// Configuration of requested EBS block device associated with the instance group with count of volumes that will be associated to every instance.
type EbsBlockDeviceConfig struct {
	VolumeSpecification VolumeSpecification `json:"VolumeSpecification"`
	VolumesPerInstance  *int64              `json:"VolumesPerInstance,omitempty"`
}
