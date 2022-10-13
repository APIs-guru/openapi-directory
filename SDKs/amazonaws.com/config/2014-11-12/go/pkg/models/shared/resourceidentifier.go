package shared

import (
	"time"
)

type ResourceIdentifier struct {
	ResourceDeletionTime *time.Time        `json:"resourceDeletionTime"`
	ResourceID           *string           `json:"resourceId"`
	ResourceName         *string           `json:"resourceName"`
	ResourceType         *ResourceTypeEnum `json:"resourceType"`
}
