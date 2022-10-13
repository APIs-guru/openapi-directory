package shared

type RelatedResource struct {
	AdditionalInfo     map[string]string   `json:"additionalInfo"`
	ResourceIdentifier *ResourceIdentifier `json:"resourceIdentifier"`
	ResourceType       *ResourceTypeEnum   `json:"resourceType"`
}
