package shared

type GetRepositoryTriggersOutput struct {
	ConfigurationID *string             `json:"configurationId,omitempty"`
	Triggers        []RepositoryTrigger `json:"triggers,omitempty"`
}
