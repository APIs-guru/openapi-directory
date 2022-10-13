package shared

type BehaviorCriteria struct {
	ComparisonOperator           *ComparisonOperatorEnum         `json:"comparisonOperator"`
	ConsecutiveDatapointsToAlarm *int64                          `json:"consecutiveDatapointsToAlarm"`
	ConsecutiveDatapointsToClear *int64                          `json:"consecutiveDatapointsToClear"`
	DurationSeconds              *int64                          `json:"durationSeconds"`
	MlDetectionConfig            *MachineLearningDetectionConfig `json:"mlDetectionConfig"`
	StatisticalThreshold         *StatisticalThreshold           `json:"statisticalThreshold"`
	Value                        *MetricValue                    `json:"value"`
}
