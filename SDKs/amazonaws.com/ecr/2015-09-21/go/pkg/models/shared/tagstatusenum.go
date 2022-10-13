package shared

type TagStatusEnum string

const (
	TagStatusEnumTagged   TagStatusEnum = "TAGGED"
	TagStatusEnumUntagged TagStatusEnum = "UNTAGGED"
	TagStatusEnumAny      TagStatusEnum = "ANY"
)
