package shared

type CloudWatchAlarmDefinition struct {
	ComparisonOperator ComparisonOperatorEnum `json:"ComparisonOperator"`
	Dimensions         []MetricDimension      `json:"Dimensions"`
	EvaluationPeriods  *int64                 `json:"EvaluationPeriods"`
	MetricName         string                 `json:"MetricName"`
	Namespace          *string                `json:"Namespace"`
	Period             int64                  `json:"Period"`
	Statistic          *StatisticEnum         `json:"Statistic"`
	Threshold          float64                `json:"Threshold"`
	Unit               *UnitEnum              `json:"Unit"`
}
