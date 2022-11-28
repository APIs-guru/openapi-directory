package shared

// GetRepositoryTriggersOutput
// Represents the output of a get repository triggers operation.
type GetRepositoryTriggersOutput struct {
	ConfigurationID *string             `json:"configurationId,omitempty"`
	Triggers        []RepositoryTrigger `json:"triggers,omitempty"`
}
