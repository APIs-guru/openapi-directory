package operations

type PostCreateTransitGatewayMulticastDomainActionEnum string

const (
	PostCreateTransitGatewayMulticastDomainActionEnumCreateTransitGatewayMulticastDomain PostCreateTransitGatewayMulticastDomainActionEnum = "CreateTransitGatewayMulticastDomain"
)

type PostCreateTransitGatewayMulticastDomainVersionEnum string

const (
	PostCreateTransitGatewayMulticastDomainVersionEnumTwoThousandAndSixteen1115 PostCreateTransitGatewayMulticastDomainVersionEnum = "2016-11-15"
)

type PostCreateTransitGatewayMulticastDomainQueryParams struct {
	Action  PostCreateTransitGatewayMulticastDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTransitGatewayMulticastDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTransitGatewayMulticastDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateTransitGatewayMulticastDomainRequest struct {
	QueryParams PostCreateTransitGatewayMulticastDomainQueryParams
	Headers     PostCreateTransitGatewayMulticastDomainHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTransitGatewayMulticastDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
