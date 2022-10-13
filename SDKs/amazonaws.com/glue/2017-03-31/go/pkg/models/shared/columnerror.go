package shared

type ColumnError struct {
	ColumnName *string      `json:"ColumnName"`
	Error      *ErrorDetail `json:"Error"`
}
