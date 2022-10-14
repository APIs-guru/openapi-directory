package shared

type ListConfigurationsResponse struct {
	Configurations []map[string]string `json:"configurations,omitempty"`
	NextToken      *string             `json:"nextToken,omitempty"`
}
