package shared



type GlobalResourcesSharedModelsTranslationSetAttribute struct {
    ID *int32 `json:"ID,omitempty" form:"name=ID"`
    Name string `json:"Name" form:"name=Name"`
    TranslationSetID *int32 `json:"TranslationSetID,omitempty" form:"name=TranslationSetID"`
    Value *string `json:"Value,omitempty" form:"name=Value"`
    
}

