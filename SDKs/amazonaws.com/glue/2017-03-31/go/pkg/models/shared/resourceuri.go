package shared

// ResourceURI
// The URIs for function resources.
type ResourceURI struct {
	ResourceType *ResourceTypeEnum `json:"ResourceType,omitempty"`
	URI          *string           `json:"Uri,omitempty"`
}
