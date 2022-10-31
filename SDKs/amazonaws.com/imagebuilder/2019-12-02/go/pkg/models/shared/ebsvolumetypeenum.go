package shared

type EbsVolumeTypeEnum string

const (
	EbsVolumeTypeEnumStandard EbsVolumeTypeEnum = "standard"
	EbsVolumeTypeEnumIo1      EbsVolumeTypeEnum = "io1"
	EbsVolumeTypeEnumIo2      EbsVolumeTypeEnum = "io2"
	EbsVolumeTypeEnumGp2      EbsVolumeTypeEnum = "gp2"
	EbsVolumeTypeEnumGp3      EbsVolumeTypeEnum = "gp3"
	EbsVolumeTypeEnumSc1      EbsVolumeTypeEnum = "sc1"
	EbsVolumeTypeEnumSt1      EbsVolumeTypeEnum = "st1"
)
