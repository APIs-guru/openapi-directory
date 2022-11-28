package shared

// BuildSystemSharedDtoJob
// A DTO for an IJob
type BuildSystemSharedDtoJob struct {
	Activities []BuildSystemSharedDtoJobActivity `json:"Activities,omitempty"`
	Deleted    *bool                             `json:"Deleted,omitempty"`
	JobID      *int32                            `json:"JobID,omitempty"`
	Name       *string                           `json:"Name,omitempty"`
	Parameters []BuildSystemSharedDtoParameter   `json:"Parameters,omitempty"`
}

// BuildSystemSharedDtoJobInput
// A DTO for an IJob
type BuildSystemSharedDtoJobInput struct {
	Deleted *bool   `json:"Deleted,omitempty" form:"name=Deleted"`
	JobID   *int32  `json:"JobID,omitempty" form:"name=JobID"`
	Name    *string `json:"Name,omitempty" form:"name=Name"`
}
