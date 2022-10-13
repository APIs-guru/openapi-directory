package shared

type AggregateComplianceByConformancePack struct {
	AccountID           *string                             `json:"AccountId"`
	AwsRegion           *string                             `json:"AwsRegion"`
	Compliance          *AggregateConformancePackCompliance `json:"Compliance"`
	ConformancePackName *string                             `json:"ConformancePackName"`
}
