package shared

type Resources struct {
	Items    []Resource `json:"items,omitempty"`
	Position *string    `json:"position,omitempty"`
}
