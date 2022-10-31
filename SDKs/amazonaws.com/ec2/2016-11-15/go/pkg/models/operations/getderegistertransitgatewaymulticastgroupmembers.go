package operations

type GetDeregisterTransitGatewayMulticastGroupMembersActionEnum string

const (
	GetDeregisterTransitGatewayMulticastGroupMembersActionEnumDeregisterTransitGatewayMulticastGroupMembers GetDeregisterTransitGatewayMulticastGroupMembersActionEnum = "DeregisterTransitGatewayMulticastGroupMembers"
)

type GetDeregisterTransitGatewayMulticastGroupMembersVersionEnum string

const (
	GetDeregisterTransitGatewayMulticastGroupMembersVersionEnumTwoThousandAndSixteen1115 GetDeregisterTransitGatewayMulticastGroupMembersVersionEnum = "2016-11-15"
)

type GetDeregisterTransitGatewayMulticastGroupMembersQueryParams struct {
	Action                          GetDeregisterTransitGatewayMulticastGroupMembersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                          *bool                                                       `queryParam:"style=form,explode=true,name=DryRun"`
	GroupIPAddress                  *string                                                     `queryParam:"style=form,explode=true,name=GroupIpAddress"`
	NetworkInterfaceIds             []string                                                    `queryParam:"style=form,explode=true,name=NetworkInterfaceIds"`
	TransitGatewayMulticastDomainID *string                                                     `queryParam:"style=form,explode=true,name=TransitGatewayMulticastDomainId"`
	Version                         GetDeregisterTransitGatewayMulticastGroupMembersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeregisterTransitGatewayMulticastGroupMembersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeregisterTransitGatewayMulticastGroupMembersRequest struct {
	QueryParams GetDeregisterTransitGatewayMulticastGroupMembersQueryParams
	Headers     GetDeregisterTransitGatewayMulticastGroupMembersHeaders
}

type GetDeregisterTransitGatewayMulticastGroupMembersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
