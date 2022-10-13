package shared

type GlobalResourcesSharedModelsTranslationSetAttribute struct {
	ID               *int32  `json:"ID" form:"name=ID"`
	Name             string  `json:"Name" form:"name=Name"`
	TranslationSetID *int32  `json:"TranslationSetID" form:"name=TranslationSetID"`
	Value            *string `json:"Value" form:"name=Value"`
}
