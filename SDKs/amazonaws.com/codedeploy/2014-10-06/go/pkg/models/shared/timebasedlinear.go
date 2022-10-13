package shared

type TimeBasedLinear struct {
	LinearInterval   *int64 `json:"linearInterval"`
	LinearPercentage *int64 `json:"linearPercentage"`
}
