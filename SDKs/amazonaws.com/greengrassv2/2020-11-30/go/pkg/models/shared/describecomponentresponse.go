package shared

import (
	"time"
)

type DescribeComponentResponse struct {
	Arn               *string               `json:"arn"`
	ComponentName     *string               `json:"componentName"`
	ComponentVersion  *string               `json:"componentVersion"`
	CreationTimestamp *time.Time            `json:"creationTimestamp"`
	Description       *string               `json:"description"`
	Platforms         []ComponentPlatform   `json:"platforms"`
	Publisher         *string               `json:"publisher"`
	Status            *CloudComponentStatus `json:"status"`
	Tags              map[string]string     `json:"tags"`
}
