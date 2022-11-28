package shared

// OutputResources
// The resources produced by this image.
type OutputResources struct {
	Amis       []Ami       `json:"amis,omitempty"`
	Containers []Container `json:"containers,omitempty"`
}
