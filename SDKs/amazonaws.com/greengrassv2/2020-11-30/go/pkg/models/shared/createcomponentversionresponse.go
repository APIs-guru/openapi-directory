package shared

import (
	"time"
)

type CreateComponentVersionResponse struct {
	Arn               *string              `json:"arn"`
	ComponentName     string               `json:"componentName"`
	ComponentVersion  string               `json:"componentVersion"`
	CreationTimestamp time.Time            `json:"creationTimestamp"`
	Status            CloudComponentStatus `json:"status"`
}
