package shared

type EnvironmentPlatform struct {
	Languages []EnvironmentLanguage `json:"languages"`
	Platform  *PlatformTypeEnum     `json:"platform"`
}
