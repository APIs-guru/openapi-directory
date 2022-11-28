package shared

// DomainConfigurationSummary
// <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an Amazon Web Services-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul>
type DomainConfigurationSummary struct {
	DomainConfigurationArn  *string          `json:"domainConfigurationArn,omitempty"`
	DomainConfigurationName *string          `json:"domainConfigurationName,omitempty"`
	ServiceType             *ServiceTypeEnum `json:"serviceType,omitempty"`
}
