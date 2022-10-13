package operations

type GetDeregisterTransitGatewayMulticastGroupSourcesActionEnum string

const (
	GetDeregisterTransitGatewayMulticastGroupSourcesActionEnumDeregisterTransitGatewayMulticastGroupSources GetDeregisterTransitGatewayMulticastGroupSourcesActionEnum = "DeregisterTransitGatewayMulticastGroupSources"
)

type GetDeregisterTransitGatewayMulticastGroupSourcesVersionEnum string

const (
	GetDeregisterTransitGatewayMulticastGroupSourcesVersionEnumTwoThousandAndSixteen1115 GetDeregisterTransitGatewayMulticastGroupSourcesVersionEnum = "2016-11-15"
)

type GetDeregisterTransitGatewayMulticastGroupSourcesQueryParams struct {
	Action                          GetDeregisterTransitGatewayMulticastGroupSourcesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                          *bool                                                       `queryParam:"style=form,explode=true,name=DryRun"`
	GroupIPAddress                  *string                                                     `queryParam:"style=form,explode=true,name=GroupIpAddress"`
	NetworkInterfaceIds             []string                                                    `queryParam:"style=form,explode=true,name=NetworkInterfaceIds"`
	TransitGatewayMulticastDomainID *string                                                     `queryParam:"style=form,explode=true,name=TransitGatewayMulticastDomainId"`
	Version                         GetDeregisterTransitGatewayMulticastGroupSourcesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeregisterTransitGatewayMulticastGroupSourcesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeregisterTransitGatewayMulticastGroupSourcesRequest struct {
	QueryParams GetDeregisterTransitGatewayMulticastGroupSourcesQueryParams
	Headers     GetDeregisterTransitGatewayMulticastGroupSourcesHeaders
}

type GetDeregisterTransitGatewayMulticastGroupSourcesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
