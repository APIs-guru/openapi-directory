package shared

type GlobalResourcesSharedModelsStringDefinition struct {
	DescriptionForTranslator string                                         `json:"DescriptionForTranslator"`
	DoNotTranslate           *bool                                          `json:"DoNotTranslate"`
	ID                       *string                                        `json:"Id"`
	ParameterCount           *int32                                         `json:"ParameterCount"`
	Timestamp                *string                                        `json:"Timestamp"`
	Translations             []GlobalResourcesSharedModelsStringTranslation `json:"Translations"`
}
