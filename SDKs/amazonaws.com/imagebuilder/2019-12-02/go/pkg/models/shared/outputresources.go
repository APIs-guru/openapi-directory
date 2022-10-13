package shared

type OutputResources struct {
	Amis       []Ami       `json:"amis"`
	Containers []Container `json:"containers"`
}
