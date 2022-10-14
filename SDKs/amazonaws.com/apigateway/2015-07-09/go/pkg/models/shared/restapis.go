package shared

type RestApis struct {
	Items    []RestAPI `json:"items,omitempty"`
	Position *string   `json:"position,omitempty"`
}
