package operations

type GetStartVpcEndpointServicePrivateDNSVerificationActionEnum string

const (
	GetStartVpcEndpointServicePrivateDNSVerificationActionEnumStartVpcEndpointServicePrivateDNSVerification GetStartVpcEndpointServicePrivateDNSVerificationActionEnum = "StartVpcEndpointServicePrivateDnsVerification"
)

type GetStartVpcEndpointServicePrivateDNSVerificationVersionEnum string

const (
	GetStartVpcEndpointServicePrivateDNSVerificationVersionEnumTwoThousandAndSixteen1115 GetStartVpcEndpointServicePrivateDNSVerificationVersionEnum = "2016-11-15"
)

type GetStartVpcEndpointServicePrivateDNSVerificationQueryParams struct {
	Action    GetStartVpcEndpointServicePrivateDNSVerificationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun    *bool                                                       `queryParam:"style=form,explode=true,name=DryRun"`
	ServiceID string                                                      `queryParam:"style=form,explode=true,name=ServiceId"`
	Version   GetStartVpcEndpointServicePrivateDNSVerificationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStartVpcEndpointServicePrivateDNSVerificationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStartVpcEndpointServicePrivateDNSVerificationRequest struct {
	QueryParams GetStartVpcEndpointServicePrivateDNSVerificationQueryParams
	Headers     GetStartVpcEndpointServicePrivateDNSVerificationHeaders
}

type GetStartVpcEndpointServicePrivateDNSVerificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
