package shared



type ContentSubmissionSharedBusinessEntitiesContentSubmissionType struct {
    AttributeTemplate *string `json:"AttributeTemplate,omitempty" form:"name=AttributeTemplate"`
    CategoryTemplate *string `json:"CategoryTemplate,omitempty" form:"name=CategoryTemplate"`
    Description string `json:"Description" form:"name=Description"`
    Enabled *bool `json:"Enabled,omitempty" form:"name=Enabled"`
    ID *int32 `json:"ID,omitempty" form:"name=ID"`
    InventoryPackageID *string `json:"InventoryPackageID,omitempty" form:"name=InventoryPackageID"`
    JobID *int32 `json:"JobID,omitempty" form:"name=JobID"`
    Name string `json:"Name" form:"name=Name"`
    ReleaseNotesDescription *string `json:"ReleaseNotesDescription,omitempty" form:"name=ReleaseNotesDescription"`
    
}

