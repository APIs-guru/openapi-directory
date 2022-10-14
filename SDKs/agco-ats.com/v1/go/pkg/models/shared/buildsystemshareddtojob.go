package shared

type BuildSystemSharedDtoJob struct {
	Activities []BuildSystemSharedDtoJobActivity `json:"Activities,omitempty"`
	Deleted    *bool                             `json:"Deleted,omitempty"`
	JobID      *int32                            `json:"JobID,omitempty"`
	Name       *string                           `json:"Name,omitempty"`
	Parameters []BuildSystemSharedDtoParameter   `json:"Parameters,omitempty"`
}
