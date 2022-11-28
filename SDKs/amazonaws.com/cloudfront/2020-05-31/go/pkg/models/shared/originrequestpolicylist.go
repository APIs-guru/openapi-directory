package shared

// OriginRequestPolicyList
// A list of origin request policies.
type OriginRequestPolicyList struct {
	Items      []OriginRequestPolicySummary
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
