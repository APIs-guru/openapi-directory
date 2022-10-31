package shared

import (
	"time"
)

type DescribeComponentResponse struct {
	Arn               *string               `json:"arn,omitempty"`
	ComponentName     *string               `json:"componentName,omitempty"`
	ComponentVersion  *string               `json:"componentVersion,omitempty"`
	CreationTimestamp *time.Time            `json:"creationTimestamp,omitempty"`
	Description       *string               `json:"description,omitempty"`
	Platforms         []ComponentPlatform   `json:"platforms,omitempty"`
	Publisher         *string               `json:"publisher,omitempty"`
	Status            *CloudComponentStatus `json:"status,omitempty"`
	Tags              map[string]string     `json:"tags,omitempty"`
}
