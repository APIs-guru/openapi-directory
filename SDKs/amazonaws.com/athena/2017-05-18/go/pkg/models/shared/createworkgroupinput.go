package shared

type CreateWorkGroupInput struct {
	Configuration *WorkGroupConfiguration `json:"Configuration,omitempty"`
	Description   *string                 `json:"Description,omitempty"`
	Name          string                  `json:"Name"`
	Tags          []Tag                   `json:"Tags,omitempty"`
}
