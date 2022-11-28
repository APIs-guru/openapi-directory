package shared

// BuildSystemSharedDtoActivity
// A DTO for an IActivity
type BuildSystemSharedDtoActivity struct {
	ActivityID *int32                             `json:"ActivityID,omitempty"`
	Deleted    *bool                              `json:"Deleted,omitempty"`
	Name       *string                            `json:"Name,omitempty"`
	Parameters []BuildSystemSharedDtoParameter    `json:"Parameters,omitempty"`
	Steps      []BuildSystemSharedDtoActivityStep `json:"Steps,omitempty"`
}

// BuildSystemSharedDtoActivityInput
// A DTO for an IActivity
type BuildSystemSharedDtoActivityInput struct {
	ActivityID *int32  `json:"ActivityID,omitempty" form:"name=ActivityID"`
	Deleted    *bool   `json:"Deleted,omitempty" form:"name=Deleted"`
	Name       *string `json:"Name,omitempty" form:"name=Name"`
}
