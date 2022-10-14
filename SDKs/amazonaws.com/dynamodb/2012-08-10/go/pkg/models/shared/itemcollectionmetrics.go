package shared

type ItemCollectionMetrics struct {
	ItemCollectionKey   map[string]AttributeValue `json:"ItemCollectionKey,omitempty"`
	SizeEstimateRangeGb []float64                 `json:"SizeEstimateRangeGB,omitempty"`
}
