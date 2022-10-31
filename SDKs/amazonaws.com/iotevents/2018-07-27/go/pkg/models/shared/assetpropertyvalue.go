package shared

type AssetPropertyValue struct {
	Quality   *string                 `json:"quality,omitempty"`
	Timestamp *AssetPropertyTimestamp `json:"timestamp,omitempty"`
	Value     *AssetPropertyVariant   `json:"value,omitempty"`
}
