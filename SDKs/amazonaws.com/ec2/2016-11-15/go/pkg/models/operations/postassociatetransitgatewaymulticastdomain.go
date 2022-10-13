package operations

type PostAssociateTransitGatewayMulticastDomainActionEnum string

const (
	PostAssociateTransitGatewayMulticastDomainActionEnumAssociateTransitGatewayMulticastDomain PostAssociateTransitGatewayMulticastDomainActionEnum = "AssociateTransitGatewayMulticastDomain"
)

type PostAssociateTransitGatewayMulticastDomainVersionEnum string

const (
	PostAssociateTransitGatewayMulticastDomainVersionEnumTwoThousandAndSixteen1115 PostAssociateTransitGatewayMulticastDomainVersionEnum = "2016-11-15"
)

type PostAssociateTransitGatewayMulticastDomainQueryParams struct {
	Action  PostAssociateTransitGatewayMulticastDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateTransitGatewayMulticastDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateTransitGatewayMulticastDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateTransitGatewayMulticastDomainRequest struct {
	QueryParams PostAssociateTransitGatewayMulticastDomainQueryParams
	Headers     PostAssociateTransitGatewayMulticastDomainHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateTransitGatewayMulticastDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
