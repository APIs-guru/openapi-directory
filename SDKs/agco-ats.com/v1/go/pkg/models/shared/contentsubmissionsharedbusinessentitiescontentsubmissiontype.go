package shared

type ContentSubmissionSharedBusinessEntitiesContentSubmissionType struct {
	AttributeTemplate       *string `json:"AttributeTemplate" form:"name=AttributeTemplate"`
	CategoryTemplate        *string `json:"CategoryTemplate" form:"name=CategoryTemplate"`
	Description             string  `json:"Description" form:"name=Description"`
	Enabled                 *bool   `json:"Enabled" form:"name=Enabled"`
	ID                      *int32  `json:"ID" form:"name=ID"`
	InventoryPackageID      *string `json:"InventoryPackageID" form:"name=InventoryPackageID"`
	JobID                   *int32  `json:"JobID" form:"name=JobID"`
	Name                    string  `json:"Name" form:"name=Name"`
	ReleaseNotesDescription *string `json:"ReleaseNotesDescription" form:"name=ReleaseNotesDescription"`
}
