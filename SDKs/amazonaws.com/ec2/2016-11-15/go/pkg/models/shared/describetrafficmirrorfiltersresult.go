package shared

type DescribeTrafficMirrorFiltersResult struct {
	NextToken            *string
	TrafficMirrorFilters []TrafficMirrorFilter
}
