package shared



type JobDetail struct {
    ArrayProperties *ArrayPropertiesDetail `json:"arrayProperties,omitempty"`
    Attempts []AttemptDetail `json:"attempts,omitempty"`
    Container *ContainerDetail `json:"container,omitempty"`
    CreatedAt *int64 `json:"createdAt,omitempty"`
    DependsOn []JobDependency `json:"dependsOn,omitempty"`
    JobArn *string `json:"jobArn,omitempty"`
    JobDefinition string `json:"jobDefinition"`
    JobID string `json:"jobId"`
    JobName string `json:"jobName"`
    JobQueue string `json:"jobQueue"`
    NodeDetails *NodeDetails `json:"nodeDetails,omitempty"`
    NodeProperties *NodeProperties `json:"nodeProperties,omitempty"`
    Parameters map[string]string `json:"parameters,omitempty"`
    PlatformCapabilities []PlatformCapabilityEnum `json:"platformCapabilities,omitempty"`
    PropagateTags *bool `json:"propagateTags,omitempty"`
    RetryStrategy *RetryStrategy `json:"retryStrategy,omitempty"`
    StartedAt int64 `json:"startedAt"`
    Status JobStatusEnum `json:"status"`
    StatusReason *string `json:"statusReason,omitempty"`
    StoppedAt *int64 `json:"stoppedAt,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Timeout *JobTimeout `json:"timeout,omitempty"`
    
}

