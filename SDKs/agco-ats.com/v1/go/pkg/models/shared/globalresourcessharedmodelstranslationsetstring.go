package shared

// GlobalResourcesSharedModelsTranslationSetString
// The resulting translation in a translation set.  is the  to which the string will be translated.
type GlobalResourcesSharedModelsTranslationSetString struct {
	LanguageID       int32   `json:"LanguageID" form:"name=LanguageID"`
	StringID         string  `json:"StringID" form:"name=StringID"`
	StringValue      *string `json:"StringValue,omitempty" form:"name=StringValue"`
	TranslationSetID int32   `json:"TranslationSetId" form:"name=TranslationSetId"`
}
