package shared

type DomainConfigurationSummary struct {
	DomainConfigurationArn  *string          `json:"domainConfigurationArn"`
	DomainConfigurationName *string          `json:"domainConfigurationName"`
	ServiceType             *ServiceTypeEnum `json:"serviceType"`
}
