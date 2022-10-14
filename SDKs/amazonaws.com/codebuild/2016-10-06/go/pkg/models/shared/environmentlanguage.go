package shared

type EnvironmentLanguage struct {
	Images   []EnvironmentImage `json:"images,omitempty"`
	Language *LanguageTypeEnum  `json:"language,omitempty"`
}
