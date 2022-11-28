package shared

// CachePolicyList
// A list of cache policies.
type CachePolicyList struct {
	Items      []CachePolicySummary
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
