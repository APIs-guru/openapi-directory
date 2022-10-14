package shared

type FieldStats struct {
	Count        *int64   `json:"count,omitempty"`
	Max          *string  `json:"max,omitempty"`
	Mean         *string  `json:"mean,omitempty"`
	Min          *string  `json:"min,omitempty"`
	Missing      *int64   `json:"missing,omitempty"`
	Stddev       *float64 `json:"stddev,omitempty"`
	Sum          *float64 `json:"sum,omitempty"`
	SumOfSquares *float64 `json:"sumOfSquares,omitempty"`
}
