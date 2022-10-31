package shared



type ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute struct {
    ContentDefinitionID *int32 `json:"ContentDefinitionID,omitempty" form:"name=ContentDefinitionID"`
    ID *int32 `json:"ID,omitempty" form:"name=ID"`
    Name string `json:"Name" form:"name=Name"`
    Value *string `json:"Value,omitempty" form:"name=Value"`
    
}

