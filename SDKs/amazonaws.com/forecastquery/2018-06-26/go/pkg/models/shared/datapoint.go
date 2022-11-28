package shared

// DataPoint
// The forecast value for a specific date. Part of the <a>Forecast</a> object.
type DataPoint struct {
	Timestamp *string  `json:"Timestamp,omitempty"`
	Value     *float64 `json:"Value,omitempty"`
}
