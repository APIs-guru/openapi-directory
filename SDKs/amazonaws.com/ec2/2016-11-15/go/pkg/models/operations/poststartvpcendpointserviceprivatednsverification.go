package operations

type PostStartVpcEndpointServicePrivateDNSVerificationActionEnum string

const (
	PostStartVpcEndpointServicePrivateDNSVerificationActionEnumStartVpcEndpointServicePrivateDNSVerification PostStartVpcEndpointServicePrivateDNSVerificationActionEnum = "StartVpcEndpointServicePrivateDnsVerification"
)

type PostStartVpcEndpointServicePrivateDNSVerificationVersionEnum string

const (
	PostStartVpcEndpointServicePrivateDNSVerificationVersionEnumTwoThousandAndSixteen1115 PostStartVpcEndpointServicePrivateDNSVerificationVersionEnum = "2016-11-15"
)

type PostStartVpcEndpointServicePrivateDNSVerificationQueryParams struct {
	Action  PostStartVpcEndpointServicePrivateDNSVerificationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStartVpcEndpointServicePrivateDNSVerificationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStartVpcEndpointServicePrivateDNSVerificationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostStartVpcEndpointServicePrivateDNSVerificationRequest struct {
	QueryParams PostStartVpcEndpointServicePrivateDNSVerificationQueryParams
	Headers     PostStartVpcEndpointServicePrivateDNSVerificationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStartVpcEndpointServicePrivateDNSVerificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
