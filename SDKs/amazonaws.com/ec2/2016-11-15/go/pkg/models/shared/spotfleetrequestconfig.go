package shared

import (
	"time"
)

// SpotFleetRequestConfig
// Describes a Spot Fleet request.
type SpotFleetRequestConfig struct {
	ActivityStatus         *ActivityStatusEnum
	CreateTime             *time.Time
	SpotFleetRequestConfig *SpotFleetRequestConfigData
	SpotFleetRequestID     *string
	SpotFleetRequestState  *BatchStateEnum
	Tags                   []Tag
}
