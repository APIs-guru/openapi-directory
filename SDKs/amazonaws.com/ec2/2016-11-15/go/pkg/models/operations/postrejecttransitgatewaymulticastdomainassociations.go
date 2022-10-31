package operations

type PostRejectTransitGatewayMulticastDomainAssociationsActionEnum string

const (
	PostRejectTransitGatewayMulticastDomainAssociationsActionEnumRejectTransitGatewayMulticastDomainAssociations PostRejectTransitGatewayMulticastDomainAssociationsActionEnum = "RejectTransitGatewayMulticastDomainAssociations"
)

type PostRejectTransitGatewayMulticastDomainAssociationsVersionEnum string

const (
	PostRejectTransitGatewayMulticastDomainAssociationsVersionEnumTwoThousandAndSixteen1115 PostRejectTransitGatewayMulticastDomainAssociationsVersionEnum = "2016-11-15"
)

type PostRejectTransitGatewayMulticastDomainAssociationsQueryParams struct {
	Action  PostRejectTransitGatewayMulticastDomainAssociationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRejectTransitGatewayMulticastDomainAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRejectTransitGatewayMulticastDomainAssociationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRejectTransitGatewayMulticastDomainAssociationsRequest struct {
	QueryParams PostRejectTransitGatewayMulticastDomainAssociationsQueryParams
	Headers     PostRejectTransitGatewayMulticastDomainAssociationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRejectTransitGatewayMulticastDomainAssociationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
