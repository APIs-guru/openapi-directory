package shared

// OutputSerialization
// Describes how the select output is serialized.
type OutputSerialization struct {
	Csv *CsvOutput `json:"csv,omitempty"`
}
