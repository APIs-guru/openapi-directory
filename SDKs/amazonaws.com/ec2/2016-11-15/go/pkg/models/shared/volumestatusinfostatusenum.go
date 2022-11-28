package shared

type VolumeStatusInfoStatusEnum string

const (
	VolumeStatusInfoStatusEnumOk               VolumeStatusInfoStatusEnum = "ok"
	VolumeStatusInfoStatusEnumImpaired         VolumeStatusInfoStatusEnum = "impaired"
	VolumeStatusInfoStatusEnumInsufficientData VolumeStatusInfoStatusEnum = "insufficient-data"
)
