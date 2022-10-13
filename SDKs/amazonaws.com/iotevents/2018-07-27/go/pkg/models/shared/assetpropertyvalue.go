package shared

type AssetPropertyValue struct {
	Quality   *string                 `json:"quality"`
	Timestamp *AssetPropertyTimestamp `json:"timestamp"`
	Value     *AssetPropertyVariant   `json:"value"`
}
