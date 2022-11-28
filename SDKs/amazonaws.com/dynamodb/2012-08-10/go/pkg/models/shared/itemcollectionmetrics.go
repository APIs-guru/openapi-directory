package shared

// ItemCollectionMetrics
// Information about item collections, if any, that were affected by the operation. <code>ItemCollectionMetrics</code> is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response.
type ItemCollectionMetrics struct {
	ItemCollectionKey   map[string]AttributeValue `json:"ItemCollectionKey,omitempty"`
	SizeEstimateRangeGb []float64                 `json:"SizeEstimateRangeGB,omitempty"`
}
