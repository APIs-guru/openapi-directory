package shared

type BuildSystemSharedDtoJob struct {
	Activities []BuildSystemSharedDtoJobActivity `json:"Activities"`
	Deleted    *bool                             `json:"Deleted"`
	JobID      *int32                            `json:"JobID"`
	Name       *string                           `json:"Name"`
	Parameters []BuildSystemSharedDtoParameter   `json:"Parameters"`
}
