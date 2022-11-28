package shared

// TableVersionError
// An error record for table-version operations.
type TableVersionError struct {
	ErrorDetail *ErrorDetail `json:"ErrorDetail,omitempty"`
	TableName   *string      `json:"TableName,omitempty"`
	VersionID   *string      `json:"VersionId,omitempty"`
}
