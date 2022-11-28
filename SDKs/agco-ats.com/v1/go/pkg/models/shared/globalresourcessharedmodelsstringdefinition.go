package shared

// GlobalResourcesSharedModelsStringDefinition
// The definition of a string to be translated
type GlobalResourcesSharedModelsStringDefinition struct {
	DescriptionForTranslator string                                         `json:"DescriptionForTranslator"`
	DoNotTranslate           *bool                                          `json:"DoNotTranslate,omitempty"`
	ID                       *string                                        `json:"Id,omitempty"`
	ParameterCount           *int32                                         `json:"ParameterCount,omitempty"`
	Timestamp                *string                                        `json:"Timestamp,omitempty"`
	Translations             []GlobalResourcesSharedModelsStringTranslation `json:"Translations,omitempty"`
}
