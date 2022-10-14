package shared

type Authorizers struct {
	Items    []Authorizer `json:"items,omitempty"`
	Position *string      `json:"position,omitempty"`
}
