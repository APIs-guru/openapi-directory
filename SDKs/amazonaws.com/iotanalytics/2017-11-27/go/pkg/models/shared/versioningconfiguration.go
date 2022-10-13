package shared

type VersioningConfiguration struct {
	MaxVersions *int64 `json:"maxVersions"`
	Unlimited   *bool  `json:"unlimited"`
}
