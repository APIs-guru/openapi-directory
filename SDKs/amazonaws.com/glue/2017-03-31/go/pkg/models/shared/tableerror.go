package shared

// TableError
// An error record for table operations.
type TableError struct {
	ErrorDetail *ErrorDetail `json:"ErrorDetail,omitempty"`
	TableName   *string      `json:"TableName,omitempty"`
}
