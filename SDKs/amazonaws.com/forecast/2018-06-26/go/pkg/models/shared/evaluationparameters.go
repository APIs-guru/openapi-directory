package shared

// EvaluationParameters
// Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the <a>CreatePredictor</a> request.
type EvaluationParameters struct {
	BackTestWindowOffset    *int64 `json:"BackTestWindowOffset,omitempty"`
	NumberOfBacktestWindows *int64 `json:"NumberOfBacktestWindows,omitempty"`
}
