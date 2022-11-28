package shared

import (
	"time"
)

// DescribeTaskResponse
// DescribeTaskResponse
type DescribeTaskResponse struct {
	CloudWatchLogGroupArn           *string         `json:"CloudWatchLogGroupArn,omitempty"`
	CreationTime                    *time.Time      `json:"CreationTime,omitempty"`
	CurrentTaskExecutionArn         *string         `json:"CurrentTaskExecutionArn,omitempty"`
	DestinationLocationArn          *string         `json:"DestinationLocationArn,omitempty"`
	DestinationNetworkInterfaceArns []string        `json:"DestinationNetworkInterfaceArns,omitempty"`
	ErrorCode                       *string         `json:"ErrorCode,omitempty"`
	ErrorDetail                     *string         `json:"ErrorDetail,omitempty"`
	Excludes                        []FilterRule    `json:"Excludes,omitempty"`
	Includes                        []FilterRule    `json:"Includes,omitempty"`
	Name                            *string         `json:"Name,omitempty"`
	Options                         *Options        `json:"Options,omitempty"`
	Schedule                        *TaskSchedule   `json:"Schedule,omitempty"`
	SourceLocationArn               *string         `json:"SourceLocationArn,omitempty"`
	SourceNetworkInterfaceArns      []string        `json:"SourceNetworkInterfaceArns,omitempty"`
	Status                          *TaskStatusEnum `json:"Status,omitempty"`
	TaskArn                         *string         `json:"TaskArn,omitempty"`
}
