package shared

// DynamoDbTarget
// Specifies an Amazon DynamoDB table to crawl.
type DynamoDbTarget struct {
	Path     *string  `json:"Path,omitempty"`
	ScanAll  *bool    `json:"scanAll,omitempty"`
	ScanRate *float64 `json:"scanRate,omitempty"`
}
