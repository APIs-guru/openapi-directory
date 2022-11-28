package shared

// KeyGroupList
// A list of key groups.
type KeyGroupList struct {
	Items      []KeyGroupSummary
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
