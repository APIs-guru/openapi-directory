package shared

type EbsBlockDevice struct {
	Device              *string              `json:"Device"`
	VolumeSpecification *VolumeSpecification `json:"VolumeSpecification"`
}
