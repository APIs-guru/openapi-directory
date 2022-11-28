package shared

type VolumeStateEnum string

const (
	VolumeStateEnumCreating  VolumeStateEnum = "creating"
	VolumeStateEnumAvailable VolumeStateEnum = "available"
	VolumeStateEnumInUse     VolumeStateEnum = "in-use"
	VolumeStateEnumDeleting  VolumeStateEnum = "deleting"
	VolumeStateEnumDeleted   VolumeStateEnum = "deleted"
	VolumeStateEnumError     VolumeStateEnum = "error"
)
