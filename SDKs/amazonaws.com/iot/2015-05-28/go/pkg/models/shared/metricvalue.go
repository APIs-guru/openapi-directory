package shared

type MetricValue struct {
	Cidrs   []string  `json:"cidrs"`
	Count   *int64    `json:"count"`
	Number  *float64  `json:"number"`
	Numbers []float64 `json:"numbers"`
	Ports   []int64   `json:"ports"`
	Strings []string  `json:"strings"`
}
