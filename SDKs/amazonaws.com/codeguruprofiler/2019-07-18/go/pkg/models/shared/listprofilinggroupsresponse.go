package shared

type ListProfilingGroupsResponse struct {
	NextToken           *string                     `json:"nextToken"`
	ProfilingGroupNames []string                    `json:"profilingGroupNames"`
	ProfilingGroups     []ProfilingGroupDescription `json:"profilingGroups"`
}
