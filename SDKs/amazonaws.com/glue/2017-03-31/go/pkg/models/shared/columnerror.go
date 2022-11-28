package shared

// ColumnError
// Encapsulates a column name that failed and the reason for failure.
type ColumnError struct {
	ColumnName *string      `json:"ColumnName,omitempty"`
	Error      *ErrorDetail `json:"Error,omitempty"`
}
