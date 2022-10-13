package operations

type PostDeleteTransitGatewayMulticastDomainActionEnum string

const (
	PostDeleteTransitGatewayMulticastDomainActionEnumDeleteTransitGatewayMulticastDomain PostDeleteTransitGatewayMulticastDomainActionEnum = "DeleteTransitGatewayMulticastDomain"
)

type PostDeleteTransitGatewayMulticastDomainVersionEnum string

const (
	PostDeleteTransitGatewayMulticastDomainVersionEnumTwoThousandAndSixteen1115 PostDeleteTransitGatewayMulticastDomainVersionEnum = "2016-11-15"
)

type PostDeleteTransitGatewayMulticastDomainQueryParams struct {
	Action  PostDeleteTransitGatewayMulticastDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTransitGatewayMulticastDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTransitGatewayMulticastDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteTransitGatewayMulticastDomainRequest struct {
	QueryParams PostDeleteTransitGatewayMulticastDomainQueryParams
	Headers     PostDeleteTransitGatewayMulticastDomainHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTransitGatewayMulticastDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
