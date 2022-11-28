package shared

type VolumeModificationStateEnum string

const (
	VolumeModificationStateEnumModifying  VolumeModificationStateEnum = "modifying"
	VolumeModificationStateEnumOptimizing VolumeModificationStateEnum = "optimizing"
	VolumeModificationStateEnumCompleted  VolumeModificationStateEnum = "completed"
	VolumeModificationStateEnumFailed     VolumeModificationStateEnum = "failed"
)
