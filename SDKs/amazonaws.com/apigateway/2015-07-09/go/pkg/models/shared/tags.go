package shared

// Tags
// The collection of tags. Each tag element is associated with a given resource.
type Tags struct {
	Tags map[string]string `json:"tags,omitempty"`
}
