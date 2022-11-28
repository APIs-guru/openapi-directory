package shared

// RelatedResource
// Information about a related resource.
type RelatedResource struct {
	AdditionalInfo     map[string]string   `json:"additionalInfo,omitempty"`
	ResourceIdentifier *ResourceIdentifier `json:"resourceIdentifier,omitempty"`
	ResourceType       *ResourceTypeEnum   `json:"resourceType,omitempty"`
}
