package shared

type ContentSubmissionSharedBusinessEntitiesContentDefinition struct {
	Attributes          []ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute `json:"Attributes"`
	ContentDefinitionID *int32                                                              `json:"ContentDefinitionID"`
	Description         string                                                              `json:"Description"`
	Name                *string                                                             `json:"Name"`
	PackageTypeID       *string                                                             `json:"PackageTypeID"`
	TypeID              *int32                                                              `json:"TypeID"`
}
