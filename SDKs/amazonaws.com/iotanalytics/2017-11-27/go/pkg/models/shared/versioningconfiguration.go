package shared

type VersioningConfiguration struct {
	MaxVersions *int64 `json:"maxVersions,omitempty"`
	Unlimited   *bool  `json:"unlimited,omitempty"`
}
