package shared

// AggregationType
// The type of aggregation queries.
type AggregationType struct {
	Name   AggregationTypeNameEnum `json:"name"`
	Values []string                `json:"values,omitempty"`
}
