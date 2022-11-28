package shared

// Resource
// Specifies the type and name of a resource referenced by an event.
type Resource struct {
	ResourceName *string `json:"ResourceName,omitempty"`
	ResourceType *string `json:"ResourceType,omitempty"`
}
