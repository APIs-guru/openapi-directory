package shared

type ListServerNeighborsRequest struct {
	ConfigurationID          string   `json:"configurationId"`
	MaxResults               *int64   `json:"maxResults,omitempty"`
	NeighborConfigurationIds []string `json:"neighborConfigurationIds,omitempty"`
	NextToken                *string  `json:"nextToken,omitempty"`
	PortInformationNeeded    *bool    `json:"portInformationNeeded,omitempty"`
}
