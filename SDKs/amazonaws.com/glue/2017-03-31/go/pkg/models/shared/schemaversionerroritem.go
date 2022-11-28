package shared

// SchemaVersionErrorItem
// An object that contains the error details for an operation on a schema version.
type SchemaVersionErrorItem struct {
	ErrorDetails  *ErrorDetails `json:"ErrorDetails,omitempty"`
	VersionNumber *int64        `json:"VersionNumber,omitempty"`
}
