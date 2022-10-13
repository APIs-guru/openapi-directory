package shared

import (
	"time"
)

type DescribeDomainConfigurationResponse struct {
	AuthorizerConfig          *AuthorizerConfig              `json:"authorizerConfig"`
	DomainConfigurationArn    *string                        `json:"domainConfigurationArn"`
	DomainConfigurationName   *string                        `json:"domainConfigurationName"`
	DomainConfigurationStatus *DomainConfigurationStatusEnum `json:"domainConfigurationStatus"`
	DomainName                *string                        `json:"domainName"`
	DomainType                *DomainTypeEnum                `json:"domainType"`
	LastStatusChangeDate      *time.Time                     `json:"lastStatusChangeDate"`
	ServerCertificates        []ServerCertificateSummary     `json:"serverCertificates"`
	ServiceType               *ServiceTypeEnum               `json:"serviceType"`
}
