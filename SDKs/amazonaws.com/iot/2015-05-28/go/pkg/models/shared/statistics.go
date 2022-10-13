package shared

type Statistics struct {
	Average      *float64 `json:"average"`
	Count        *int64   `json:"count"`
	Maximum      *float64 `json:"maximum"`
	Minimum      *float64 `json:"minimum"`
	StdDeviation *float64 `json:"stdDeviation"`
	Sum          *float64 `json:"sum"`
	SumOfSquares *float64 `json:"sumOfSquares"`
	Variance     *float64 `json:"variance"`
}
