package shared

type CloudWatchAlarmDefinition struct {
	ComparisonOperator ComparisonOperatorEnum `json:"ComparisonOperator"`
	Dimensions         []MetricDimension      `json:"Dimensions,omitempty"`
	EvaluationPeriods  *int64                 `json:"EvaluationPeriods,omitempty"`
	MetricName         string                 `json:"MetricName"`
	Namespace          *string                `json:"Namespace,omitempty"`
	Period             int64                  `json:"Period"`
	Statistic          *StatisticEnum         `json:"Statistic,omitempty"`
	Threshold          float64                `json:"Threshold"`
	Unit               *UnitEnum              `json:"Unit,omitempty"`
}
