package shared

type ComplianceContributorCount struct {
	CapExceeded *bool  `json:"CapExceeded,omitempty"`
	CappedCount *int64 `json:"CappedCount,omitempty"`
}
