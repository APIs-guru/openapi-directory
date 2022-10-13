package shared

type ComplianceContributorCount struct {
	CapExceeded *bool  `json:"CapExceeded"`
	CappedCount *int64 `json:"CappedCount"`
}
