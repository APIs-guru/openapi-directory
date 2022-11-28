package shared

// GlobalResourcesSharedModelsTranslationSetSourceString
// Information needed to translate a string in a translation set
type GlobalResourcesSharedModelsTranslationSetSourceString struct {
	DescriptionForTranslator *string `json:"DescriptionForTranslator,omitempty"`
	LanguageID               *int32  `json:"LanguageID,omitempty"`
	StringID                 *string `json:"StringID,omitempty"`
	StringValue              *string `json:"StringValue,omitempty"`
}
