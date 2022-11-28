package shared

// AggregationConfig
//
//	The aggregation settings that you can use to customize the output format of your flow data.
type AggregationConfig struct {
	AggregationType *AggregationTypeEnum `json:"aggregationType,omitempty"`
}
