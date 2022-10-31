package shared



type ContentSubmissionSharedBusinessEntitiesContentDefinition struct {
    Attributes []ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute `json:"Attributes,omitempty"`
    ContentDefinitionID *int32 `json:"ContentDefinitionID,omitempty"`
    Description string `json:"Description"`
    Name *string `json:"Name,omitempty"`
    PackageTypeID *string `json:"PackageTypeID,omitempty"`
    TypeID *int32 `json:"TypeID,omitempty"`
    
}

