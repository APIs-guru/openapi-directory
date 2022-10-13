package shared

type BuildSystemSharedDtoActivity struct {
	ActivityID *int32                             `json:"ActivityID"`
	Deleted    *bool                              `json:"Deleted"`
	Name       *string                            `json:"Name"`
	Parameters []BuildSystemSharedDtoParameter    `json:"Parameters"`
	Steps      []BuildSystemSharedDtoActivityStep `json:"Steps"`
}
