package shared

// InputSerialization
// Describes how the archive is serialized.
type InputSerialization struct {
	Csv *CsvInput `json:"csv,omitempty"`
}
