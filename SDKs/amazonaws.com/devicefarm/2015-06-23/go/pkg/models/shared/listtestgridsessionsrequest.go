package shared

import (
	"time"
)

type ListTestGridSessionsRequest struct {
	CreationTimeAfter  *time.Time                 `json:"creationTimeAfter"`
	CreationTimeBefore *time.Time                 `json:"creationTimeBefore"`
	EndTimeAfter       *time.Time                 `json:"endTimeAfter"`
	EndTimeBefore      *time.Time                 `json:"endTimeBefore"`
	MaxResult          *int64                     `json:"maxResult"`
	NextToken          *string                    `json:"nextToken"`
	ProjectArn         string                     `json:"projectArn"`
	Status             *TestGridSessionStatusEnum `json:"status"`
}
