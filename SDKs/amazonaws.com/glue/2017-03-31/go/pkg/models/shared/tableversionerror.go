package shared

type TableVersionError struct {
	ErrorDetail *ErrorDetail `json:"ErrorDetail"`
	TableName   *string      `json:"TableName"`
	VersionID   *string      `json:"VersionId"`
}
