package shared



type Relationship struct {
    RelationshipName *string `json:"relationshipName,omitempty"`
    ResourceID *string `json:"resourceId,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    
}

