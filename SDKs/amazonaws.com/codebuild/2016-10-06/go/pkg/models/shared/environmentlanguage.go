package shared

// EnvironmentLanguage
// A set of Docker images that are related by programming language and are managed by CodeBuild.
type EnvironmentLanguage struct {
	Images   []EnvironmentImage `json:"images,omitempty"`
	Language *LanguageTypeEnum  `json:"language,omitempty"`
}
