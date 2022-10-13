package shared

type ListServerNeighborsRequest struct {
	ConfigurationID          string   `json:"configurationId"`
	MaxResults               *int64   `json:"maxResults"`
	NeighborConfigurationIds []string `json:"neighborConfigurationIds"`
	NextToken                *string  `json:"nextToken"`
	PortInformationNeeded    *bool    `json:"portInformationNeeded"`
}
