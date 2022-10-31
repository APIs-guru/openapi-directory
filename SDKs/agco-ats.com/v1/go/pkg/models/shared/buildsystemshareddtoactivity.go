package shared

type BuildSystemSharedDtoActivity struct {
	ActivityID *int32                             `json:"ActivityID,omitempty"`
	Deleted    *bool                              `json:"Deleted,omitempty"`
	Name       *string                            `json:"Name,omitempty"`
	Parameters []BuildSystemSharedDtoParameter    `json:"Parameters,omitempty"`
	Steps      []BuildSystemSharedDtoActivityStep `json:"Steps,omitempty"`
}
