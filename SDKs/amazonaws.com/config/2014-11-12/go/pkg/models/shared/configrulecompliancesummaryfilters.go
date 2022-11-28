package shared

// ConfigRuleComplianceSummaryFilters
// Filters the results based on the account IDs and regions.
type ConfigRuleComplianceSummaryFilters struct {
	AccountID *string `json:"AccountId,omitempty"`
	AwsRegion *string `json:"AwsRegion,omitempty"`
}
