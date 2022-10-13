package shared

import (
	"time"
)

type GetResourceConfigHistoryRequest struct {
	ChronologicalOrder *ChronologicalOrderEnum `json:"chronologicalOrder"`
	EarlierTime        *time.Time              `json:"earlierTime"`
	LaterTime          *time.Time              `json:"laterTime"`
	Limit              *int64                  `json:"limit"`
	NextToken          *string                 `json:"nextToken"`
	ResourceID         string                  `json:"resourceId"`
	ResourceType       ResourceTypeEnum        `json:"resourceType"`
}
