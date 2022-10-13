package shared

type ListConfigurationsResponse struct {
	Configurations []map[string]string `json:"configurations"`
	NextToken      *string             `json:"nextToken"`
}
