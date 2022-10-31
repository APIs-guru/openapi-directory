package shared



type ListProfilingGroupsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    ProfilingGroupNames []string `json:"profilingGroupNames"`
    ProfilingGroups []ProfilingGroupDescription `json:"profilingGroups,omitempty"`
    
}

