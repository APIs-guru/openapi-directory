package shared

type ListServicesRequest struct {
	Cluster            *string                 `json:"cluster"`
	LaunchType         *LaunchTypeEnum         `json:"launchType"`
	MaxResults         *int64                  `json:"maxResults"`
	NextToken          *string                 `json:"nextToken"`
	SchedulingStrategy *SchedulingStrategyEnum `json:"schedulingStrategy"`
}
