package shared

import (
	"time"
)

type DomainNameConfiguration struct {
	APIGatewayDomainName                *string               `json:"ApiGatewayDomainName"`
	CertificateArn                      *string               `json:"CertificateArn"`
	CertificateName                     *string               `json:"CertificateName"`
	CertificateUploadDate               *time.Time            `json:"CertificateUploadDate"`
	DomainNameStatus                    *DomainNameStatusEnum `json:"DomainNameStatus"`
	DomainNameStatusMessage             *string               `json:"DomainNameStatusMessage"`
	EndpointType                        *EndpointTypeEnum     `json:"EndpointType"`
	HostedZoneID                        *string               `json:"HostedZoneId"`
	OwnershipVerificationCertificateArn *string               `json:"OwnershipVerificationCertificateArn"`
	SecurityPolicy                      *SecurityPolicyEnum   `json:"SecurityPolicy"`
}
