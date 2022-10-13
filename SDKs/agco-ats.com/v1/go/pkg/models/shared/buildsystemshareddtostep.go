package shared

type BuildSystemSharedDtoStep struct {
	ConfigRequired   bool                            `json:"ConfigRequired"`
	Deleted          *bool                           `json:"Deleted"`
	Description      *string                         `json:"Description"`
	ImplementationID string                          `json:"ImplementationID"`
	Name             string                          `json:"Name"`
	Parameters       []BuildSystemSharedDtoParameter `json:"Parameters"`
	StepID           *int32                          `json:"StepID"`
}
