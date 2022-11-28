package shared

// Relationship
// The relationship of the related resource to the main resource.
type Relationship struct {
	RelationshipName *string           `json:"relationshipName,omitempty"`
	ResourceID       *string           `json:"resourceId,omitempty"`
	ResourceName     *string           `json:"resourceName,omitempty"`
	ResourceType     *ResourceTypeEnum `json:"resourceType,omitempty"`
}
