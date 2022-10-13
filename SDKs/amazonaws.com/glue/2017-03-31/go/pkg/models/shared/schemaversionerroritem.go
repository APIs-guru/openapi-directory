package shared

type SchemaVersionErrorItem struct {
	ErrorDetails  *ErrorDetails `json:"ErrorDetails"`
	VersionNumber *int64        `json:"VersionNumber"`
}
