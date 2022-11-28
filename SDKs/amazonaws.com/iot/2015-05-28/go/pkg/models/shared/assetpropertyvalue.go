package shared

// AssetPropertyValue
// An asset property value entry containing the following information.
type AssetPropertyValue struct {
	Quality   *string                `json:"quality,omitempty"`
	Timestamp AssetPropertyTimestamp `json:"timestamp"`
	Value     AssetPropertyVariant   `json:"value"`
}
