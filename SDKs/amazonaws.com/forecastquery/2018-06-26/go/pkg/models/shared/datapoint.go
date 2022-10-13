package shared

type DataPoint struct {
	Timestamp *string  `json:"Timestamp"`
	Value     *float64 `json:"Value"`
}
