package shared



type ComponentDeploymentSpecification struct {
    ComponentVersion *string `json:"componentVersion,omitempty"`
    ConfigurationUpdate *ComponentConfigurationUpdate `json:"configurationUpdate,omitempty"`
    RunWith *ComponentRunWith `json:"runWith,omitempty"`
    
}

