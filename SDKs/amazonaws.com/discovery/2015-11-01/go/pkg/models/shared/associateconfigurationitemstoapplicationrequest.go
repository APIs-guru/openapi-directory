package shared



type AssociateConfigurationItemsToApplicationRequest struct {
    ApplicationConfigurationID string `json:"applicationConfigurationId"`
    ConfigurationIds []string `json:"configurationIds"`
    
}

