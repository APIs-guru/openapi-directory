package shared

type Deployments struct {
	Items    []Deployment `json:"items,omitempty"`
	Position *string      `json:"position,omitempty"`
}
