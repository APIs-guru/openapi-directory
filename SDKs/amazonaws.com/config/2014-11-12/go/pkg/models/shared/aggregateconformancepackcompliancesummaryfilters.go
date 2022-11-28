package shared

// AggregateConformancePackComplianceSummaryFilters
// Filters the results based on account ID and region.
type AggregateConformancePackComplianceSummaryFilters struct {
	AccountID *string `json:"AccountId,omitempty"`
	AwsRegion *string `json:"AwsRegion,omitempty"`
}
