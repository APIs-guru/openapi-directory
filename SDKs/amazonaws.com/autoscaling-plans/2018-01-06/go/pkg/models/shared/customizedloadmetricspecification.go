package shared

type CustomizedLoadMetricSpecification struct {
	Dimensions []MetricDimension   `json:"Dimensions,omitempty"`
	MetricName string              `json:"MetricName"`
	Namespace  string              `json:"Namespace"`
	Statistic  MetricStatisticEnum `json:"Statistic"`
	Unit       *string             `json:"Unit,omitempty"`
}
