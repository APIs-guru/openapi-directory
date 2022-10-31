package shared

type ColumnError struct {
	ColumnName *string      `json:"ColumnName,omitempty"`
	Error      *ErrorDetail `json:"Error,omitempty"`
}
