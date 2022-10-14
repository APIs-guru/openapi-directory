package shared

type ListServicesRequest struct {
	Cluster            *string                 `json:"cluster,omitempty"`
	LaunchType         *LaunchTypeEnum         `json:"launchType,omitempty"`
	MaxResults         *int64                  `json:"maxResults,omitempty"`
	NextToken          *string                 `json:"nextToken,omitempty"`
	SchedulingStrategy *SchedulingStrategyEnum `json:"schedulingStrategy,omitempty"`
}
