package shared

type EvaluationParameters struct {
	BackTestWindowOffset    *int64 `json:"BackTestWindowOffset"`
	NumberOfBacktestWindows *int64 `json:"NumberOfBacktestWindows"`
}
