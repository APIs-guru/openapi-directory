package shared

type EbsBlockDeviceConfig struct {
	VolumeSpecification VolumeSpecification `json:"VolumeSpecification"`
	VolumesPerInstance  *int64              `json:"VolumesPerInstance"`
}
