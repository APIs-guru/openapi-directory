package shared

type ItemCollectionMetrics struct {
	ItemCollectionKey   map[string]AttributeValue `json:"ItemCollectionKey"`
	SizeEstimateRangeGb []float64                 `json:"SizeEstimateRangeGB"`
}
