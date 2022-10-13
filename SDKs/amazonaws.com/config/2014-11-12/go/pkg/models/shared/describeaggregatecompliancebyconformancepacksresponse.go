package shared

type DescribeAggregateComplianceByConformancePacksResponse struct {
	AggregateComplianceByConformancePacks []AggregateComplianceByConformancePack `json:"AggregateComplianceByConformancePacks"`
	NextToken                             *string                                `json:"NextToken"`
}
