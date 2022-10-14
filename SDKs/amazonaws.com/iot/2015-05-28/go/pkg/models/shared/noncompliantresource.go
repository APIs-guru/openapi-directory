package shared

type NonCompliantResource struct {
	AdditionalInfo     map[string]string   `json:"additionalInfo,omitempty"`
	ResourceIdentifier *ResourceIdentifier `json:"resourceIdentifier,omitempty"`
	ResourceType       *ResourceTypeEnum   `json:"resourceType,omitempty"`
}
