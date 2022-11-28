package shared

// InterpolatedAssetPropertyValue
// Contains information about an interpolated asset property value.
type InterpolatedAssetPropertyValue struct {
	Timestamp TimeInNanos `json:"timestamp"`
	Value     Variant     `json:"value"`
}
