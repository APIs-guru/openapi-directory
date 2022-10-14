package shared

type SchemaVersionNumber struct {
	LatestVersion *bool  `json:"LatestVersion,omitempty"`
	VersionNumber *int64 `json:"VersionNumber,omitempty"`
}
