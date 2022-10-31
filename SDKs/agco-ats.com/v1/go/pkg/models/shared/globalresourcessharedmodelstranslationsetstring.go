package shared



type GlobalResourcesSharedModelsTranslationSetString struct {
    LanguageID int32 `json:"LanguageID" form:"name=LanguageID"`
    StringID string `json:"StringID" form:"name=StringID"`
    StringValue *string `json:"StringValue,omitempty" form:"name=StringValue"`
    TranslationSetID int32 `json:"TranslationSetId" form:"name=TranslationSetId"`
    
}

