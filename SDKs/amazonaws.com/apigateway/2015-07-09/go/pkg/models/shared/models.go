package shared

type Models struct {
	Items    []Model `json:"items,omitempty"`
	Position *string `json:"position,omitempty"`
}
