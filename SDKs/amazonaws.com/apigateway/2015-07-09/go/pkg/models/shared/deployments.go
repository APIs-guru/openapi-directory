package shared

type Deployments struct {
	Items    []Deployment `json:"items"`
	Position *string      `json:"position"`
}
