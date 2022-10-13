package shared

type Relationship struct {
	RelationshipName *string           `json:"relationshipName"`
	ResourceID       *string           `json:"resourceId"`
	ResourceName     *string           `json:"resourceName"`
	ResourceType     *ResourceTypeEnum `json:"resourceType"`
}
