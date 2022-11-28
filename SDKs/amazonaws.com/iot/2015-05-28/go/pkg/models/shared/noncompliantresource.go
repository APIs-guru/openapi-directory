package shared

// NonCompliantResource
// Information about the resource that was noncompliant with the audit check.
type NonCompliantResource struct {
	AdditionalInfo     map[string]string   `json:"additionalInfo,omitempty"`
	ResourceIdentifier *ResourceIdentifier `json:"resourceIdentifier,omitempty"`
	ResourceType       *ResourceTypeEnum   `json:"resourceType,omitempty"`
}
