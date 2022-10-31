package shared

import (
"time")

type DescribeDomainConfigurationResponse struct {
    AuthorizerConfig *AuthorizerConfig `json:"authorizerConfig,omitempty"`
    DomainConfigurationArn *string `json:"domainConfigurationArn,omitempty"`
    DomainConfigurationName *string `json:"domainConfigurationName,omitempty"`
    DomainConfigurationStatus *DomainConfigurationStatusEnum `json:"domainConfigurationStatus,omitempty"`
    DomainName *string `json:"domainName,omitempty"`
    DomainType *DomainTypeEnum `json:"domainType,omitempty"`
    LastStatusChangeDate *time.Time `json:"lastStatusChangeDate,omitempty"`
    ServerCertificates []ServerCertificateSummary `json:"serverCertificates,omitempty"`
    ServiceType *ServiceTypeEnum `json:"serviceType,omitempty"`
    
}

