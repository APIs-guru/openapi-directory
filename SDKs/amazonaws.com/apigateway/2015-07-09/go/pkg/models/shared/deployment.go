package shared

import (
	"time"
)

type Deployment struct {
	APISummary  map[string]map[string]MethodSnapshot `json:"apiSummary"`
	CreatedDate *time.Time                           `json:"createdDate"`
	Description *string                              `json:"description"`
	ID          *string                              `json:"id"`
}
