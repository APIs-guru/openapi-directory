package shared

import (
	"time"
)

type DescribeTaskResponse struct {
	CloudWatchLogGroupArn           *string         `json:"CloudWatchLogGroupArn"`
	CreationTime                    *time.Time      `json:"CreationTime"`
	CurrentTaskExecutionArn         *string         `json:"CurrentTaskExecutionArn"`
	DestinationLocationArn          *string         `json:"DestinationLocationArn"`
	DestinationNetworkInterfaceArns []string        `json:"DestinationNetworkInterfaceArns"`
	ErrorCode                       *string         `json:"ErrorCode"`
	ErrorDetail                     *string         `json:"ErrorDetail"`
	Excludes                        []FilterRule    `json:"Excludes"`
	Includes                        []FilterRule    `json:"Includes"`
	Name                            *string         `json:"Name"`
	Options                         *Options        `json:"Options"`
	Schedule                        *TaskSchedule   `json:"Schedule"`
	SourceLocationArn               *string         `json:"SourceLocationArn"`
	SourceNetworkInterfaceArns      []string        `json:"SourceNetworkInterfaceArns"`
	Status                          *TaskStatusEnum `json:"Status"`
	TaskArn                         *string         `json:"TaskArn"`
}
