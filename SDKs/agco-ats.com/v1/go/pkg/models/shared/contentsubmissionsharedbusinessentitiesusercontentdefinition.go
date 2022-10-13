package shared

type ContentSubmissionSharedBusinessEntitiesUserContentDefinition struct {
	ContentDefinitionID     *int32 `json:"ContentDefinitionID" form:"name=ContentDefinitionID"`
	UserContentDefinitionID *int32 `json:"UserContentDefinitionID" form:"name=UserContentDefinitionID"`
	UserID                  *int32 `json:"UserID" form:"name=UserID"`
}
