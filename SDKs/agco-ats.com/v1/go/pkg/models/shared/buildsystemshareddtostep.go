package shared

type BuildSystemSharedDtoStep struct {
	ConfigRequired   bool                            `json:"ConfigRequired"`
	Deleted          *bool                           `json:"Deleted,omitempty"`
	Description      *string                         `json:"Description,omitempty"`
	ImplementationID string                          `json:"ImplementationID"`
	Name             string                          `json:"Name"`
	Parameters       []BuildSystemSharedDtoParameter `json:"Parameters,omitempty"`
	StepID           *int32                          `json:"StepID,omitempty"`
}
