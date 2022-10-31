package shared



type DisassociateConfigurationItemsFromApplicationRequest struct {
    ApplicationConfigurationID string `json:"applicationConfigurationId"`
    ConfigurationIds []string `json:"configurationIds"`
    
}

