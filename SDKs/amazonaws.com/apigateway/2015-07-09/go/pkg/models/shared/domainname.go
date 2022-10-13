package shared

import (
	"time"
)

type DomainName struct {
	CertificateArn                      *string                  `json:"certificateArn"`
	CertificateName                     *string                  `json:"certificateName"`
	CertificateUploadDate               *time.Time               `json:"certificateUploadDate"`
	DistributionDomainName              *string                  `json:"distributionDomainName"`
	DistributionHostedZoneID            *string                  `json:"distributionHostedZoneId"`
	DomainName                          *string                  `json:"domainName"`
	DomainNameStatus                    *DomainNameStatusEnum    `json:"domainNameStatus"`
	DomainNameStatusMessage             *string                  `json:"domainNameStatusMessage"`
	EndpointConfiguration               *EndpointConfiguration   `json:"endpointConfiguration"`
	MutualTLSAuthentication             *MutualTLSAuthentication `json:"mutualTlsAuthentication"`
	OwnershipVerificationCertificateArn *string                  `json:"ownershipVerificationCertificateArn"`
	RegionalCertificateArn              *string                  `json:"regionalCertificateArn"`
	RegionalCertificateName             *string                  `json:"regionalCertificateName"`
	RegionalDomainName                  *string                  `json:"regionalDomainName"`
	RegionalHostedZoneID                *string                  `json:"regionalHostedZoneId"`
	SecurityPolicy                      *SecurityPolicyEnum      `json:"securityPolicy"`
	Tags                                map[string]string        `json:"tags"`
}
