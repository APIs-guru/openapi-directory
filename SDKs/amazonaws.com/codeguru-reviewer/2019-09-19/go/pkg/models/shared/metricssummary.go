package shared

type MetricsSummary struct {
	FindingsCount           *int64 `json:"FindingsCount"`
	MeteredLinesOfCodeCount *int64 `json:"MeteredLinesOfCodeCount"`
}
