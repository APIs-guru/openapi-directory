package shared

type TagFilterTypeEnum string

const (
	TagFilterTypeEnumKeyOnly     TagFilterTypeEnum = "KEY_ONLY"
	TagFilterTypeEnumValueOnly   TagFilterTypeEnum = "VALUE_ONLY"
	TagFilterTypeEnumKeyAndValue TagFilterTypeEnum = "KEY_AND_VALUE"
)
