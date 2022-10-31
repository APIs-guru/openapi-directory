package operations

type PostAcceptTransitGatewayMulticastDomainAssociationsActionEnum string

const (
	PostAcceptTransitGatewayMulticastDomainAssociationsActionEnumAcceptTransitGatewayMulticastDomainAssociations PostAcceptTransitGatewayMulticastDomainAssociationsActionEnum = "AcceptTransitGatewayMulticastDomainAssociations"
)

type PostAcceptTransitGatewayMulticastDomainAssociationsVersionEnum string

const (
	PostAcceptTransitGatewayMulticastDomainAssociationsVersionEnumTwoThousandAndSixteen1115 PostAcceptTransitGatewayMulticastDomainAssociationsVersionEnum = "2016-11-15"
)

type PostAcceptTransitGatewayMulticastDomainAssociationsQueryParams struct {
	Action  PostAcceptTransitGatewayMulticastDomainAssociationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAcceptTransitGatewayMulticastDomainAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAcceptTransitGatewayMulticastDomainAssociationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAcceptTransitGatewayMulticastDomainAssociationsRequest struct {
	QueryParams PostAcceptTransitGatewayMulticastDomainAssociationsQueryParams
	Headers     PostAcceptTransitGatewayMulticastDomainAssociationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAcceptTransitGatewayMulticastDomainAssociationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
