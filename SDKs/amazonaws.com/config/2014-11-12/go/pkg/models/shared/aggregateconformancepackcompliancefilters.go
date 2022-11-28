package shared

// AggregateConformancePackComplianceFilters
// Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.
type AggregateConformancePackComplianceFilters struct {
	AccountID           *string                            `json:"AccountId,omitempty"`
	AwsRegion           *string                            `json:"AwsRegion,omitempty"`
	ComplianceType      *ConformancePackComplianceTypeEnum `json:"ComplianceType,omitempty"`
	ConformancePackName *string                            `json:"ConformancePackName,omitempty"`
}
