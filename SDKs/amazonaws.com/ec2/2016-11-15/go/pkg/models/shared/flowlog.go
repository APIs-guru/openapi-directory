package shared

import (
	"time"
)

// FlowLog
// Describes a flow log.
type FlowLog struct {
	CreationTime             *time.Time
	DeliverLogsErrorMessage  *string
	DeliverLogsPermissionArn *string
	DeliverLogsStatus        *string
	FlowLogID                *string
	FlowLogStatus            *string
	LogDestination           *string
	LogDestinationType       *LogDestinationTypeEnum
	LogFormat                *string
	LogGroupName             *string
	MaxAggregationInterval   *int64
	ResourceID               *string
	Tags                     []Tag
	TrafficType              *TrafficTypeEnum
}
