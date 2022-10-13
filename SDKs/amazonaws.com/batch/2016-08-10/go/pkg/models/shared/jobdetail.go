package shared

type JobDetail struct {
	ArrayProperties      *ArrayPropertiesDetail   `json:"arrayProperties"`
	Attempts             []AttemptDetail          `json:"attempts"`
	Container            *ContainerDetail         `json:"container"`
	CreatedAt            *int64                   `json:"createdAt"`
	DependsOn            []JobDependency          `json:"dependsOn"`
	JobArn               *string                  `json:"jobArn"`
	JobDefinition        string                   `json:"jobDefinition"`
	JobID                string                   `json:"jobId"`
	JobName              string                   `json:"jobName"`
	JobQueue             string                   `json:"jobQueue"`
	NodeDetails          *NodeDetails             `json:"nodeDetails"`
	NodeProperties       *NodeProperties          `json:"nodeProperties"`
	Parameters           map[string]string        `json:"parameters"`
	PlatformCapabilities []PlatformCapabilityEnum `json:"platformCapabilities"`
	PropagateTags        *bool                    `json:"propagateTags"`
	RetryStrategy        *RetryStrategy           `json:"retryStrategy"`
	StartedAt            int64                    `json:"startedAt"`
	Status               JobStatusEnum            `json:"status"`
	StatusReason         *string                  `json:"statusReason"`
	StoppedAt            *int64                   `json:"stoppedAt"`
	Tags                 map[string]string        `json:"tags"`
	Timeout              *JobTimeout              `json:"timeout"`
}
