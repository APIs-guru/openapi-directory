package shared



type DomainConfigurationSummary struct {
    DomainConfigurationArn *string `json:"domainConfigurationArn,omitempty"`
    DomainConfigurationName *string `json:"domainConfigurationName,omitempty"`
    ServiceType *ServiceTypeEnum `json:"serviceType,omitempty"`
    
}

