package shared

// TimestreamDimension
// Metadata attributes of the time series that are written in each measure record.
type TimestreamDimension struct {
	Name  string `json:"name"`
	Value string `json:"value"`
}
