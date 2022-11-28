package shared

// SchemaVersionNumber
// A structure containing the schema version information.
type SchemaVersionNumber struct {
	LatestVersion *bool  `json:"LatestVersion,omitempty"`
	VersionNumber *int64 `json:"VersionNumber,omitempty"`
}
