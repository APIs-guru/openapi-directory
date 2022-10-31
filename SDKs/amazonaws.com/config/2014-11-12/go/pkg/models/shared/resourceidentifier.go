package shared

import (
"time")

type ResourceIdentifier struct {
    ResourceDeletionTime *time.Time `json:"resourceDeletionTime,omitempty"`
    ResourceID *string `json:"resourceId,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    
}

