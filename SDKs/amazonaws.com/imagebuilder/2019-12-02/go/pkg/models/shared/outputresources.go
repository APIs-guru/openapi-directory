package shared

type OutputResources struct {
	Amis       []Ami       `json:"amis,omitempty"`
	Containers []Container `json:"containers,omitempty"`
}
