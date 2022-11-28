package shared

// VolumeStatusInfo
// Describes the status of a volume.
type VolumeStatusInfo struct {
	Details []VolumeStatusDetails
	Status  *VolumeStatusInfoStatusEnum
}
