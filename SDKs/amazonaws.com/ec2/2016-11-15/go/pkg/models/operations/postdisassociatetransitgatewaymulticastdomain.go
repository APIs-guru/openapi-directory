package operations

type PostDisassociateTransitGatewayMulticastDomainActionEnum string

const (
	PostDisassociateTransitGatewayMulticastDomainActionEnumDisassociateTransitGatewayMulticastDomain PostDisassociateTransitGatewayMulticastDomainActionEnum = "DisassociateTransitGatewayMulticastDomain"
)

type PostDisassociateTransitGatewayMulticastDomainVersionEnum string

const (
	PostDisassociateTransitGatewayMulticastDomainVersionEnumTwoThousandAndSixteen1115 PostDisassociateTransitGatewayMulticastDomainVersionEnum = "2016-11-15"
)

type PostDisassociateTransitGatewayMulticastDomainQueryParams struct {
	Action  PostDisassociateTransitGatewayMulticastDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateTransitGatewayMulticastDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateTransitGatewayMulticastDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisassociateTransitGatewayMulticastDomainRequest struct {
	QueryParams PostDisassociateTransitGatewayMulticastDomainQueryParams
	Headers     PostDisassociateTransitGatewayMulticastDomainHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateTransitGatewayMulticastDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
