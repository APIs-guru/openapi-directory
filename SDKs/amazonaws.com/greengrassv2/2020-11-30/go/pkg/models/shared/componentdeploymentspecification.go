package shared

type ComponentDeploymentSpecification struct {
	ComponentVersion    *string                       `json:"componentVersion"`
	ConfigurationUpdate *ComponentConfigurationUpdate `json:"configurationUpdate"`
	RunWith             *ComponentRunWith             `json:"runWith"`
}
