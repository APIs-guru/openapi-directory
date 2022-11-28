package shared

import (
	"time"
)

// ResourceIdentifier
// The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name.
type ResourceIdentifier struct {
	ResourceDeletionTime *time.Time        `json:"resourceDeletionTime,omitempty"`
	ResourceID           *string           `json:"resourceId,omitempty"`
	ResourceName         *string           `json:"resourceName,omitempty"`
	ResourceType         *ResourceTypeEnum `json:"resourceType,omitempty"`
}
