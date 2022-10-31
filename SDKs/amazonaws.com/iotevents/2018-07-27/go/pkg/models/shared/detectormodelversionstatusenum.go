package shared

type DetectorModelVersionStatusEnum string

const (
	DetectorModelVersionStatusEnumActive     DetectorModelVersionStatusEnum = "ACTIVE"
	DetectorModelVersionStatusEnumActivating DetectorModelVersionStatusEnum = "ACTIVATING"
	DetectorModelVersionStatusEnumInactive   DetectorModelVersionStatusEnum = "INACTIVE"
	DetectorModelVersionStatusEnumDeprecated DetectorModelVersionStatusEnum = "DEPRECATED"
	DetectorModelVersionStatusEnumDraft      DetectorModelVersionStatusEnum = "DRAFT"
	DetectorModelVersionStatusEnumPaused     DetectorModelVersionStatusEnum = "PAUSED"
	DetectorModelVersionStatusEnumFailed     DetectorModelVersionStatusEnum = "FAILED"
)
