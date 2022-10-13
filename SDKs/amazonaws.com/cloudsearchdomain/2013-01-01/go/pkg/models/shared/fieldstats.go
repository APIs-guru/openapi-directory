package shared

type FieldStats struct {
	Count        *int64   `json:"count"`
	Max          *string  `json:"max"`
	Mean         *string  `json:"mean"`
	Min          *string  `json:"min"`
	Missing      *int64   `json:"missing"`
	Stddev       *float64 `json:"stddev"`
	Sum          *float64 `json:"sum"`
	SumOfSquares *float64 `json:"sumOfSquares"`
}
