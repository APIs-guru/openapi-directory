package shared

type EnvironmentPlatform struct {
	Languages []EnvironmentLanguage `json:"languages,omitempty"`
	Platform  *PlatformTypeEnum     `json:"platform,omitempty"`
}
