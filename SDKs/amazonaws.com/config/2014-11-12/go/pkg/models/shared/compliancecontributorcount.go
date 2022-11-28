package shared

// ComplianceContributorCount
// The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item, up to a maximum number.
type ComplianceContributorCount struct {
	CapExceeded *bool  `json:"CapExceeded,omitempty"`
	CappedCount *int64 `json:"CappedCount,omitempty"`
}
