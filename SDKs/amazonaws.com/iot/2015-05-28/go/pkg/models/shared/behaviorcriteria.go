package shared

// BehaviorCriteria
// The criteria by which the behavior is determined to be normal.
type BehaviorCriteria struct {
	ComparisonOperator           *ComparisonOperatorEnum         `json:"comparisonOperator,omitempty"`
	ConsecutiveDatapointsToAlarm *int64                          `json:"consecutiveDatapointsToAlarm,omitempty"`
	ConsecutiveDatapointsToClear *int64                          `json:"consecutiveDatapointsToClear,omitempty"`
	DurationSeconds              *int64                          `json:"durationSeconds,omitempty"`
	MlDetectionConfig            *MachineLearningDetectionConfig `json:"mlDetectionConfig,omitempty"`
	StatisticalThreshold         *StatisticalThreshold           `json:"statisticalThreshold,omitempty"`
	Value                        *MetricValue                    `json:"value,omitempty"`
}
