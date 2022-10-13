package shared

type CreateWorkGroupInput struct {
	Configuration *WorkGroupConfiguration `json:"Configuration"`
	Description   *string                 `json:"Description"`
	Name          string                  `json:"Name"`
	Tags          []Tag                   `json:"Tags"`
}
