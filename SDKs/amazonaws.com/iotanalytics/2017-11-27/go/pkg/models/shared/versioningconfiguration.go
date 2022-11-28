package shared

// VersioningConfiguration
// Information about the versioning of dataset contents.
type VersioningConfiguration struct {
	MaxVersions *int64 `json:"maxVersions,omitempty"`
	Unlimited   *bool  `json:"unlimited,omitempty"`
}
