package shared

import (
	"time"
)

// DomainName
// <p>Represents a custom domain name as a user-friendly host name of an API (<a>RestApi</a>).</p> <div class="Remarks"> <p>When you deploy an API, API Gateway creates a default host name for the API. This default API host name is of the <code>{restapi-id}.execute-api.{region}.amazonaws.com</code> format. With the default host name, you can access the API's root resource with the URL of <code>https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}/</code>. When you set up a custom domain name of <code>apis.example.com</code> for this API, you can then access the same resource using the URL of the <code>https://apis.examples.com/myApi</code>, where <code>myApi</code> is the base path mapping (<a>BasePathMapping</a>) of your API under the custom domain name. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Set a Custom Host Name for an API</a> </div>
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
