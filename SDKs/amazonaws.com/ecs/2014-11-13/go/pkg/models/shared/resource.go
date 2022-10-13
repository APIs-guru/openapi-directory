package shared

type Resource struct {
	DoubleValue    *float64 `json:"doubleValue"`
	IntegerValue   *int64   `json:"integerValue"`
	LongValue      *int64   `json:"longValue"`
	Name           *string  `json:"name"`
	StringSetValue []string `json:"stringSetValue"`
	Type           *string  `json:"type"`
}
