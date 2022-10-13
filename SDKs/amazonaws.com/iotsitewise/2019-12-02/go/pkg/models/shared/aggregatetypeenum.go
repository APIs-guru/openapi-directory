package shared

type AggregateTypeEnum string

const (
	AggregateTypeEnumAverage           AggregateTypeEnum = "AVERAGE"
	AggregateTypeEnumCount             AggregateTypeEnum = "COUNT"
	AggregateTypeEnumMaximum           AggregateTypeEnum = "MAXIMUM"
	AggregateTypeEnumMinimum           AggregateTypeEnum = "MINIMUM"
	AggregateTypeEnumSum               AggregateTypeEnum = "SUM"
	AggregateTypeEnumStandardDeviation AggregateTypeEnum = "STANDARD_DEVIATION"
)
