package shared

type FindingChangeTypeEnum string

const (
	FindingChangeTypeEnumChanged   FindingChangeTypeEnum = "CHANGED"
	FindingChangeTypeEnumNew       FindingChangeTypeEnum = "NEW"
	FindingChangeTypeEnumUnchanged FindingChangeTypeEnum = "UNCHANGED"
)
