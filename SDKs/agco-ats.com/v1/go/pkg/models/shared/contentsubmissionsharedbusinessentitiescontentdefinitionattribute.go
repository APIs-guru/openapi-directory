package shared

type ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute struct {
	ContentDefinitionID *int32  `json:"ContentDefinitionID" form:"name=ContentDefinitionID"`
	ID                  *int32  `json:"ID" form:"name=ID"`
	Name                string  `json:"Name" form:"name=Name"`
	Value               *string `json:"Value" form:"name=Value"`
}
