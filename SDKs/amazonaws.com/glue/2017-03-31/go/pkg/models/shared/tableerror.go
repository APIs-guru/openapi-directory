package shared

type TableError struct {
	ErrorDetail *ErrorDetail `json:"ErrorDetail"`
	TableName   *string      `json:"TableName"`
}
