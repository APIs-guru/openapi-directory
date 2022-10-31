package shared

type AggregatedSourceStatusTypeEnum string

const (
	AggregatedSourceStatusTypeEnumFailed    AggregatedSourceStatusTypeEnum = "FAILED"
	AggregatedSourceStatusTypeEnumSucceeded AggregatedSourceStatusTypeEnum = "SUCCEEDED"
	AggregatedSourceStatusTypeEnumOutdated  AggregatedSourceStatusTypeEnum = "OUTDATED"
)
