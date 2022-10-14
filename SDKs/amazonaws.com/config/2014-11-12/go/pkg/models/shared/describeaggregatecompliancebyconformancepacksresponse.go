package shared

type DescribeAggregateComplianceByConformancePacksResponse struct {
	AggregateComplianceByConformancePacks []AggregateComplianceByConformancePack `json:"AggregateComplianceByConformancePacks,omitempty"`
	NextToken                             *string                                `json:"NextToken,omitempty"`
}
