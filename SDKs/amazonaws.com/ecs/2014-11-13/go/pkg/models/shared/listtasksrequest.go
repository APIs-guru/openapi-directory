package shared



type ListTasksRequest struct {
    Cluster *string `json:"cluster,omitempty"`
    ContainerInstance *string `json:"containerInstance,omitempty"`
    DesiredStatus *DesiredStatusEnum `json:"desiredStatus,omitempty"`
    Family *string `json:"family,omitempty"`
    LaunchType *LaunchTypeEnum `json:"launchType,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    StartedBy *string `json:"startedBy,omitempty"`
    
}

