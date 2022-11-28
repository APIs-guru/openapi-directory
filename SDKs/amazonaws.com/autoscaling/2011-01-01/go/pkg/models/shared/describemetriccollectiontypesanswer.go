package shared

type DescribeMetricCollectionTypesAnswer struct {
	Granularities []MetricGranularityType
	Metrics       []MetricCollectionType
}
