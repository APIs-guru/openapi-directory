package shared

type AggregateConformancePackComplianceFilters struct {
	AccountID           *string                            `json:"AccountId"`
	AwsRegion           *string                            `json:"AwsRegion"`
	ComplianceType      *ConformancePackComplianceTypeEnum `json:"ComplianceType"`
	ConformancePackName *string                            `json:"ConformancePackName"`
}
