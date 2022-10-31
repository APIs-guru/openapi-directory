package shared

import (
	"time"
)

type DomainNameConfiguration struct {
	APIGatewayDomainName                *string               `json:"ApiGatewayDomainName,omitempty"`
	CertificateArn                      *string               `json:"CertificateArn,omitempty"`
	CertificateName                     *string               `json:"CertificateName,omitempty"`
	CertificateUploadDate               *time.Time            `json:"CertificateUploadDate,omitempty"`
	DomainNameStatus                    *DomainNameStatusEnum `json:"DomainNameStatus,omitempty"`
	DomainNameStatusMessage             *string               `json:"DomainNameStatusMessage,omitempty"`
	EndpointType                        *EndpointTypeEnum     `json:"EndpointType,omitempty"`
	HostedZoneID                        *string               `json:"HostedZoneId,omitempty"`
	OwnershipVerificationCertificateArn *string               `json:"OwnershipVerificationCertificateArn,omitempty"`
	SecurityPolicy                      *SecurityPolicyEnum   `json:"SecurityPolicy,omitempty"`
}
