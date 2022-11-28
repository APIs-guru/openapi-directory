package shared

type DimensionValueSourceEnum string

const (
	DimensionValueSourceEnumMessageTag  DimensionValueSourceEnum = "messageTag"
	DimensionValueSourceEnumEmailHeader DimensionValueSourceEnum = "emailHeader"
	DimensionValueSourceEnumLinkTag     DimensionValueSourceEnum = "linkTag"
)
