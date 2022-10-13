package shared

type SchemaVersionNumber struct {
	LatestVersion *bool  `json:"LatestVersion"`
	VersionNumber *int64 `json:"VersionNumber"`
}
