package shared

type ContentSubmissionSharedBusinessEntitiesUserContentDefinition struct {
	ContentDefinitionID     *int32 `json:"ContentDefinitionID,omitempty" form:"name=ContentDefinitionID"`
	UserContentDefinitionID *int32 `json:"UserContentDefinitionID,omitempty" form:"name=UserContentDefinitionID"`
	UserID                  *int32 `json:"UserID,omitempty" form:"name=UserID"`
}
