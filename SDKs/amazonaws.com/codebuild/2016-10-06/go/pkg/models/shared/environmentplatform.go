package shared

// EnvironmentPlatform
// A set of Docker images that are related by platform and are managed by CodeBuild.
type EnvironmentPlatform struct {
	Languages []EnvironmentLanguage `json:"languages,omitempty"`
	Platform  *PlatformTypeEnum     `json:"platform,omitempty"`
}
