package operations

type GetDeleteTransitGatewayMulticastDomainActionEnum string

const (
	GetDeleteTransitGatewayMulticastDomainActionEnumDeleteTransitGatewayMulticastDomain GetDeleteTransitGatewayMulticastDomainActionEnum = "DeleteTransitGatewayMulticastDomain"
)

type GetDeleteTransitGatewayMulticastDomainVersionEnum string

const (
	GetDeleteTransitGatewayMulticastDomainVersionEnumTwoThousandAndSixteen1115 GetDeleteTransitGatewayMulticastDomainVersionEnum = "2016-11-15"
)

type GetDeleteTransitGatewayMulticastDomainQueryParams struct {
	Action                          GetDeleteTransitGatewayMulticastDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                          *bool                                             `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayMulticastDomainID string                                            `queryParam:"style=form,explode=true,name=TransitGatewayMulticastDomainId"`
	Version                         GetDeleteTransitGatewayMulticastDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTransitGatewayMulticastDomainHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteTransitGatewayMulticastDomainRequest struct {
	QueryParams GetDeleteTransitGatewayMulticastDomainQueryParams
	Headers     GetDeleteTransitGatewayMulticastDomainHeaders
}

type GetDeleteTransitGatewayMulticastDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
