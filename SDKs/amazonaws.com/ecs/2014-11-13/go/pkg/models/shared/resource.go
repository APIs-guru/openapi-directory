package shared

type Resource struct {
	DoubleValue    *float64 `json:"doubleValue,omitempty"`
	IntegerValue   *int64   `json:"integerValue,omitempty"`
	LongValue      *int64   `json:"longValue,omitempty"`
	Name           *string  `json:"name,omitempty"`
	StringSetValue []string `json:"stringSetValue,omitempty"`
	Type           *string  `json:"type,omitempty"`
}
