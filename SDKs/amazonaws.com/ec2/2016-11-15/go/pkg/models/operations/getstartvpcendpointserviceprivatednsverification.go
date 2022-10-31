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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
