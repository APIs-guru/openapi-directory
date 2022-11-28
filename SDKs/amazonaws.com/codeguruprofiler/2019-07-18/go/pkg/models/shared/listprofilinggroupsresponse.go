package shared

// ListProfilingGroupsResponse
// The structure representing the listProfilingGroupsResponse.
type ListProfilingGroupsResponse struct {
	NextToken           *string                     `json:"nextToken,omitempty"`
	ProfilingGroupNames []string                    `json:"profilingGroupNames"`
	ProfilingGroups     []ProfilingGroupDescription `json:"profilingGroups,omitempty"`
}
