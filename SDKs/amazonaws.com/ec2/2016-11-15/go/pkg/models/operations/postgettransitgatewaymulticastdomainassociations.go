package operations

type PostGetTransitGatewayMulticastDomainAssociationsActionEnum string

const (
	PostGetTransitGatewayMulticastDomainAssociationsActionEnumGetTransitGatewayMulticastDomainAssociations PostGetTransitGatewayMulticastDomainAssociationsActionEnum = "GetTransitGatewayMulticastDomainAssociations"
)

type PostGetTransitGatewayMulticastDomainAssociationsVersionEnum string

const (
	PostGetTransitGatewayMulticastDomainAssociationsVersionEnumTwoThousandAndSixteen1115 PostGetTransitGatewayMulticastDomainAssociationsVersionEnum = "2016-11-15"
)

type PostGetTransitGatewayMulticastDomainAssociationsQueryParams struct {
	Action     PostGetTransitGatewayMulticastDomainAssociationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                                     `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostGetTransitGatewayMulticastDomainAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetTransitGatewayMulticastDomainAssociationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetTransitGatewayMulticastDomainAssociationsRequest struct {
	QueryParams PostGetTransitGatewayMulticastDomainAssociationsQueryParams
	Headers     PostGetTransitGatewayMulticastDomainAssociationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetTransitGatewayMulticastDomainAssociationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
