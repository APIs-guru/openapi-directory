package shared

type ListTasksRequest struct {
	Cluster           *string            `json:"cluster"`
	ContainerInstance *string            `json:"containerInstance"`
	DesiredStatus     *DesiredStatusEnum `json:"desiredStatus"`
	Family            *string            `json:"family"`
	LaunchType        *LaunchTypeEnum    `json:"launchType"`
	MaxResults        *int64             `json:"maxResults"`
	NextToken         *string            `json:"nextToken"`
	ServiceName       *string            `json:"serviceName"`
	StartedBy         *string            `json:"startedBy"`
}
