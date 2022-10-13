package shared

type Statistics struct {
	Avg               *float64 `json:"Avg"`
	Count             *int64   `json:"Count"`
	CountDistinct     *int64   `json:"CountDistinct"`
	CountDistinctLong *int64   `json:"CountDistinctLong"`
	CountLong         *int64   `json:"CountLong"`
	CountNan          *int64   `json:"CountNan"`
	CountNanLong      *int64   `json:"CountNanLong"`
	CountNull         *int64   `json:"CountNull"`
	CountNullLong     *int64   `json:"CountNullLong"`
	Max               *string  `json:"Max"`
	Min               *string  `json:"Min"`
	Stddev            *float64 `json:"Stddev"`
}
