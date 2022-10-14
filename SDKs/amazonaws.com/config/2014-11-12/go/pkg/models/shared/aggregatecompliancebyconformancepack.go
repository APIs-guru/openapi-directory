package shared

type AggregateComplianceByConformancePack struct {
	AccountID           *string                             `json:"AccountId,omitempty"`
	AwsRegion           *string                             `json:"AwsRegion,omitempty"`
	Compliance          *AggregateConformancePackCompliance `json:"Compliance,omitempty"`
	ConformancePackName *string                             `json:"ConformancePackName,omitempty"`
}
