package shared

type RangeModeEnum string

const (
	RangeModeEnumFirst                   RangeModeEnum = "FIRST"
	RangeModeEnumLast                    RangeModeEnum = "LAST"
	RangeModeEnumLastBeforeMissingValues RangeModeEnum = "LAST_BEFORE_MISSING_VALUES"
	RangeModeEnumInclusive               RangeModeEnum = "INCLUSIVE"
	RangeModeEnumExclusive               RangeModeEnum = "EXCLUSIVE"
)
