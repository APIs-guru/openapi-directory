package shared

type VolumeTypeEnum string

const (
	VolumeTypeEnumStandard VolumeTypeEnum = "standard"
	VolumeTypeEnumIo1      VolumeTypeEnum = "io1"
	VolumeTypeEnumIo2      VolumeTypeEnum = "io2"
	VolumeTypeEnumGp2      VolumeTypeEnum = "gp2"
	VolumeTypeEnumSc1      VolumeTypeEnum = "sc1"
	VolumeTypeEnumSt1      VolumeTypeEnum = "st1"
	VolumeTypeEnumGp3      VolumeTypeEnum = "gp3"
)
