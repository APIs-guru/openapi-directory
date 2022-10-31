package shared

type VpcLinks struct {
	Items    []VpcLink `json:"items,omitempty"`
	Position *string   `json:"position,omitempty"`
}
