package shared

type EvaluationParameters struct {
	BackTestWindowOffset    *int64 `json:"BackTestWindowOffset,omitempty"`
	NumberOfBacktestWindows *int64 `json:"NumberOfBacktestWindows,omitempty"`
}
