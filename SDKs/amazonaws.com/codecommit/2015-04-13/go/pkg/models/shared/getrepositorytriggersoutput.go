package shared

type GetRepositoryTriggersOutput struct {
	ConfigurationID *string             `json:"configurationId"`
	Triggers        []RepositoryTrigger `json:"triggers"`
}
