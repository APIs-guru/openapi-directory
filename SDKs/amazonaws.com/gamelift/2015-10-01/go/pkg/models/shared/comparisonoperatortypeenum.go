package shared

type ComparisonOperatorTypeEnum string

const (
	ComparisonOperatorTypeEnumGreaterThanOrEqualToThreshold ComparisonOperatorTypeEnum = "GreaterThanOrEqualToThreshold"
	ComparisonOperatorTypeEnumGreaterThanThreshold          ComparisonOperatorTypeEnum = "GreaterThanThreshold"
	ComparisonOperatorTypeEnumLessThanThreshold             ComparisonOperatorTypeEnum = "LessThanThreshold"
	ComparisonOperatorTypeEnumLessThanOrEqualToThreshold    ComparisonOperatorTypeEnum = "LessThanOrEqualToThreshold"
)
