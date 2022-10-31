package shared




type ComparisonOperatorEnum string

const (
    ComparisonOperatorEnumEq ComparisonOperatorEnum = "EQ"
ComparisonOperatorEnumNe ComparisonOperatorEnum = "NE"
ComparisonOperatorEnumIn ComparisonOperatorEnum = "IN"
ComparisonOperatorEnumLe ComparisonOperatorEnum = "LE"
ComparisonOperatorEnumLt ComparisonOperatorEnum = "LT"
ComparisonOperatorEnumGe ComparisonOperatorEnum = "GE"
ComparisonOperatorEnumGt ComparisonOperatorEnum = "GT"
ComparisonOperatorEnumBetween ComparisonOperatorEnum = "BETWEEN"
ComparisonOperatorEnumNotNull ComparisonOperatorEnum = "NOT_NULL"
ComparisonOperatorEnumNull ComparisonOperatorEnum = "NULL"
ComparisonOperatorEnumContains ComparisonOperatorEnum = "CONTAINS"
ComparisonOperatorEnumNotContains ComparisonOperatorEnum = "NOT_CONTAINS"
ComparisonOperatorEnumBeginsWith ComparisonOperatorEnum = "BEGINS_WITH"
)


