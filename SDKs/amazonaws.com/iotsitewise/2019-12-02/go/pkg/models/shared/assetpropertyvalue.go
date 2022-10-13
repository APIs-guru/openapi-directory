package shared

type AssetPropertyValue struct {
	Quality   *QualityEnum `json:"quality"`
	Timestamp TimeInNanos  `json:"timestamp"`
	Value     Variant      `json:"value"`
}
