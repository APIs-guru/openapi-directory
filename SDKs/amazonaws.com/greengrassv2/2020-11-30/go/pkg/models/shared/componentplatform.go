package shared

// ComponentPlatform
// Contains information about a platform that a component supports.
type ComponentPlatform struct {
	Attributes map[string]string `json:"attributes,omitempty"`
	Name       *string           `json:"name,omitempty"`
}
