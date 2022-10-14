package shared

import (
	"time"
)

type DomainName struct {
	CertificateArn                      *string                  `json:"certificateArn,omitempty"`
	CertificateName                     *string                  `json:"certificateName,omitempty"`
	CertificateUploadDate               *time.Time               `json:"certificateUploadDate,omitempty"`
	DistributionDomainName              *string                  `json:"distributionDomainName,omitempty"`
	DistributionHostedZoneID            *string                  `json:"distributionHostedZoneId,omitempty"`
	DomainName                          *string                  `json:"domainName,omitempty"`
	DomainNameStatus                    *DomainNameStatusEnum    `json:"domainNameStatus,omitempty"`
	DomainNameStatusMessage             *string                  `json:"domainNameStatusMessage,omitempty"`
	EndpointConfiguration               *EndpointConfiguration   `json:"endpointConfiguration,omitempty"`
	MutualTLSAuthentication             *MutualTLSAuthentication `json:"mutualTlsAuthentication,omitempty"`
	OwnershipVerificationCertificateArn *string                  `json:"ownershipVerificationCertificateArn,omitempty"`
	RegionalCertificateArn              *string                  `json:"regionalCertificateArn,omitempty"`
	RegionalCertificateName             *string                  `json:"regionalCertificateName,omitempty"`
	RegionalDomainName                  *string                  `json:"regionalDomainName,omitempty"`
	RegionalHostedZoneID                *string                  `json:"regionalHostedZoneId,omitempty"`
	SecurityPolicy                      *SecurityPolicyEnum      `json:"securityPolicy,omitempty"`
	Tags                                map[string]string        `json:"tags,omitempty"`
}
