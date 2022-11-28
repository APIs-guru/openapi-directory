package shared

import (
	"time"
)

// GetResourceConfigHistoryRequest
// The input for the <a>GetResourceConfigHistory</a> action.
type GetResourceConfigHistoryRequest struct {
	ChronologicalOrder *ChronologicalOrderEnum `json:"chronologicalOrder,omitempty"`
	EarlierTime        *time.Time              `json:"earlierTime,omitempty"`
	LaterTime          *time.Time              `json:"laterTime,omitempty"`
	Limit              *int64                  `json:"limit,omitempty"`
	NextToken          *string                 `json:"nextToken,omitempty"`
	ResourceID         string                  `json:"resourceId"`
	ResourceType       ResourceTypeEnum        `json:"resourceType"`
}
