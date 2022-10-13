package shared

type EnvironmentLanguage struct {
	Images   []EnvironmentImage `json:"images"`
	Language *LanguageTypeEnum  `json:"language"`
}
