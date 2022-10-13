package shared

type DynamoDbTarget struct {
	Path     *string  `json:"Path"`
	ScanAll  *bool    `json:"scanAll"`
	ScanRate *float64 `json:"scanRate"`
}
