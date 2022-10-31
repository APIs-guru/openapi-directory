package shared

type ReplacementTypeEnumEnum string

const (
	ReplacementTypeEnumEnumKeepBase        ReplacementTypeEnumEnum = "KEEP_BASE"
	ReplacementTypeEnumEnumKeepSource      ReplacementTypeEnumEnum = "KEEP_SOURCE"
	ReplacementTypeEnumEnumKeepDestination ReplacementTypeEnumEnum = "KEEP_DESTINATION"
	ReplacementTypeEnumEnumUseNewContent   ReplacementTypeEnumEnum = "USE_NEW_CONTENT"
)
