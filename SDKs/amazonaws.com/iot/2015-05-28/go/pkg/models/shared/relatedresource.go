package shared

type RelatedResource struct {
	AdditionalInfo     map[string]string   `json:"additionalInfo,omitempty"`
	ResourceIdentifier *ResourceIdentifier `json:"resourceIdentifier,omitempty"`
	ResourceType       *ResourceTypeEnum   `json:"resourceType,omitempty"`
}
