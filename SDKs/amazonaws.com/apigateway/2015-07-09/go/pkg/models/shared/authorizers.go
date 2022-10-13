package shared

type Authorizers struct {
	Items    []Authorizer `json:"items"`
	Position *string      `json:"position"`
}
